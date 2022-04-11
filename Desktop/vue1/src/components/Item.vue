<template>
    <li id="ttl" class="list-group-item d-flex justify-content-between align-items-start">
        <div id="ttltext">
            {{t}}
        {{ t.title }}
        </div>
        <span id="per">
        {{ t.percent }}%
        &#9679;	
        </span>
        <router-link tag="button" class="btn btn-dark"  
            :to="{path: '/more', query: {type: t.type} }">Подробнее</router-link>
    </li>
</template>

<script>
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
