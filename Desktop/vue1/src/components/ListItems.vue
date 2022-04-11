<template>
    <div> 
        <ul class= "list-group p-4 align-items-center" >
           <Item
              v-for="t of titles"
              v-bind:t="t"
              :key="t.id"
           />
        </ul>
        
    </div>
</template>

<script>
import Item from '@/components/Item'
export default {
  props: ['titles'],
  components: {
    Item
  },
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: auto;
    height: 60px;
  }
</style>
