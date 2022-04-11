<template>
  <div id="more">
    <MoreListItems

    />
  </div>
</template>

<script>
import MoreListItems from '@/components/MoreListItems'
import PercentFond from '@/components/PercentFond'
export default {
  name: 'More',
  components: {
    MoreListItems, PercentFond
  },

    data() {
    return{
  }
  }

}
</script>

<style lang="scss">
h1 {
  text-align: center;
}
.container{
  overflow: hidden;
  white-space: nowrap;
  }
#line {
  float: left; 
  padding: 10px;
}
</style>