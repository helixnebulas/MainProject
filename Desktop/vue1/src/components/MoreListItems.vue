<template>
    <div> 
      <div> <h1 ><strong> {{item.title}}:
        <div> {{item.percent}}% </div>
        </strong></h1></div>
        <ul class= "list-group p-4 align-items-center" >
          <li id="fondli"> 
            <div id="fondname">
            Название
            </div>
            <span id="fondper">
            Статус
            </span>
          </li>
           <MoreItem
              v-for="a of items"
              v-bind:a="a"
              :key="a.id"
           />
        </ul>
    </div>
</template>

<script>
import MoreItem from '@/components/MoreItem'
import { ITEMS } from '@/consts';
export default {
  props: ['item'],
  components: {
    MoreItem
  },
  data () {
    return {
    }
  },
  computed: {
    type() {
      return this.$route.query.type;
    },
    item() {
      return ITEMS[this.type];
    },
    title() {
      return this.item.title;
    },
    items() {
      if (this.item.type == 1) {
      return [
        { id: 1, title: "А105", percent: 55 + "%"},
        { id: 2, title: "Б212", percent: 24 + "%"},
        { id: 3, title: "И304", percent: 15 + "%"},
        { id: 4, title: "В02", percent: 55 + "%"},
        { id: 5, title: "А203", percent: 24 + "%"},
        { id: 6, title: "Г220", percent: 15 + "%"},
      ]
      } 
      else if (this.item.type == 2) {
      return [
        { id: 1, title: "ИСМБ-18-1", percent: "да"},
        { id: 2, title: "ВАОА-12", percent: "нет"},
        { id: 3, title: "АВЫВ-1", percent: "да"},
      ]
      }
      else {
        return [
        { id: 1, title: "ИСМБ-18-1", percent: "да"},
        { id: 2, title: "ВАОА-12", percent: "нет"},
        { id: 3, title: "АВЫВ-1", percent: "да"},
      ]
      }
    },
}
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: auto;
    height: auto;
  }
  #fondname {
    font-weight: bold;
  }
  #fondper{
    font-weight: bold;
  }
  li {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  #fondli {
    width: 30%;
  }
</style>
