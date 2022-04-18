<template>
  <div id="home">
    <div id="statusper">
    <h1 ><strong> Общий статус: </strong> 
    <Percent/>
    </h1>
    </div>
    <div id="statustable">
    <ListItems
      v-bind:titles="titles"
    />
    </div>
  </div>
</template>

<script>
import ListItems from '@/components/ListItems'
import Percent from '@/components/Percent'
import {TYPE_AUDS, TYPES_MAGS_SPLITTED, TYPE_MAGS_LECTIONS, ITEMS} from '@/consts';
export default {
  name: 'Home',
  components: {
    ListItems, Percent
  },
  computed: {
  },

  data() {
    return{
    titles: Object.values(ITEMS),
  }
  }
}
</script>

<style lang="scss">
#statusper {
  text-align: center;
}
</style>
