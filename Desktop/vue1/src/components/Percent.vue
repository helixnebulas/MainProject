<template>
<div> 
    <h1><strong> {{ totalAverage }}% </strong> 
    </h1>
        <div class="progress">
            <div  class="progress-bar" role="progressbar" v-bind:style="progressStyle" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">{{totalAverage}}%</div>
        </div>
</div>
</template>

<script>
export default {
    computed: {
        totalAverage() {
            return this.$store.getters.totalAverage;
        },
        progressStyle() {
            return {
                'width': '${this.totalAverage}%',
                'background-color': 'purple',
            }
        },
    }
}
</script>

<style scoped>
    .progress {
        align-items: center;
        width: 200px;
        margin: auto;
    }
</style>
