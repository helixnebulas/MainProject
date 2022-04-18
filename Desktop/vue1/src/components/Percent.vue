<template>
<div> 
    <h1><strong> 25% </strong> 
    </h1>
        <div class="progress">
            <div class="progress-bar" role="progressbar" :style="progressStyle" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
        </div>
</div>
</template>

<script>
export default {
    computed: {
        totalAverage() {

        },
        progressStyle() {
            return {
                'width': '65%',
                'background-color': 'purple'
            }
        }
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
