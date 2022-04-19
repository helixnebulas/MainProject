<template>
    <li id="ttl" class="list-group-item d-flex justify-content-between align-items-start">
        <div id="ttltext">
        {{ t.title }}
        </div>
        <span id="per" :style="mystyle">
        {{ average.toFixed([2]) }}%
        &#9679;	
        </span>
        <router-link tag="button" class="btn btn-dark"  
            :to="{path: '/more', query: {type: t.type} }">Подробнее</router-link>
    </li>
</template>

<script>
import chroma from 'chroma-js';
export default {
    props: {
        t: {
            type: Object,
            required: true
        }
    },
    mounted() {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    },
    beforeUnmount() {
       
    },
    data() {
    return {
    color: chroma.scale(['red', 'lightgreen'])
  }
  },
   computed: {
        mystyle() {
            let clr = null; 
            clr = (this.color)(Number.parseInt(this.t.percent) / 100.0).hex();
            return {
                color: clr
            }
        },
        average() {
      return this.$store.getters.averageValues[this.$props.t.type];
    },
    }
}
</script>

<style scoped>
#ttl {
    width: 50%;
    height: auto;
}
.li {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
#per {
    align-items: left;
    display: flex;
    color: green;
}
#ttltext {
    width: 50%;
}

</style>
