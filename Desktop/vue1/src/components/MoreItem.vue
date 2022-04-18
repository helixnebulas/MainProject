<template>
    <li id="ttl" class="list-group-item d-flex justify-content-between align-items-start">
        <div id="ttltext">
        {{ a.title }} 
        </div>
        <span id="per" :style="mystyle">
        {{ a.percent }}
        </span>
    </li>
</template>

<script>
import chroma from 'chroma-js';
export default {
    props: {
        a: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            color: chroma.scale(['red', 'lightgreen'])
        }
    },
    computed: {
        mystyle() {
            let clr = null;
            if (this.a.percent == 'да') {
                clr = (this.color)(100.0).hex();
            }
            else if (this.a.percent == 'нет') {
                clr = (this.color)(0).hex();
            } else {
                clr = (this.color)(Number.parseInt(this.a.percent) / 100.0).hex();
            }
            return {
                color: clr
            }
        }
    }
}
</script>

<style scoped>
#ttl {
    width: 30%;
    height: 45px;
}
#per {
    align-items: left;
    display: flex;
}
#ttltext {
    width: 50%;
    padding-left: 10px;
}

</style>
