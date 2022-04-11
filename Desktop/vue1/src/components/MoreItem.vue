<template>
    <li id="ttl" class="list-group-item d-flex justify-content-between align-items-start">
        <div id="ttltext">
        {{ a.title }} 
        </div>
        <span id="per">
        {{ a.percent }}
        </span>
    </li>
</template>

<script>
export default {
    props: {
        a: {
            type: Object,
            required: true
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
