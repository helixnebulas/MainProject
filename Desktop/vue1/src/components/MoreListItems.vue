<template>
  <div>
    <div>
      <h1>
        <strong>
          {{ getitem.title }}:
          <div>{{ getitem.percent }}%</div>
        </strong>
      </h1>
    </div>
    <form class="d-flex">
      <input style="width: 20%"
        class="form-control me-2"
        type="search"
        placeholder="Что найти?"
        aria-label="Поиск"
        v-model="searchInput"
      />
    </form>
    <ul class="list-group p-4 align-items-center">
      <li id="fondli">
        <div id="fondname">Название</div>
        <div id="remove">
          <input type="checkbox" name="remove-full" value="100%" @click="filterFull">
          <label for="remove-full">Убрать 100%</label>
        </div>
        <span id="fondper"> Статус </span>
      </li>
      <MoreItem v-for="a of (filteredItems)" v-bind:a="a" :key="a.id" />
    </ul>
  </div>
</template>

<script>
import MoreItem from "@/components/MoreItem";
import { ITEMS } from "@/consts";
export default {
  props: ["item"],
  components: {
    MoreItem,
  },
  data() {
    return {
      searchInput: "",
      listItems: null,
    };
  },
  methods: {
    searching(event) {
      event.preventDefault();
    },
    
    filterFull(event) {
      if(event.target.checked) {
        this.listItems = this.items.filter(el => Number.parseInt(el.percent) < 100);
      } else {
        this.listItems = null;
      }
}
  },
  computed: {
    type() {
      return this.$route.query.type;
    },
    filteredItems() {
      if (this.searchInput != "") {
      return  this.items.filter(el => el.title.toLowerCase().includes(this.searchInput.toLowerCase()));;
      } else {
        return this.items;
      }
    },
    getitem() {
      return ITEMS[this.type];
    },
    title() {
      return this.getitem.title;
    },
    items() {
      if (this.getitem.type == 1) {
        return [
          { id: 1, title: "А105", percent: "55%" },
          { id: 2, title: "Б212", percent: "24%" },
          { id: 3, title: "И304", percent: "15%" },
          { id: 4, title: "В02", percent: "55%" },
          { id: 5, title: "А203", percent: "24%" },
          { id: 6, title: "Г220", percent: "100%" },
        ];
      } else if (this.getitem.type == 2) {
        return [
          { id: 1, title: "ИСМБ-18-1", percent: "да" },
          { id: 2, title: "ВАОА-12", percent: "нет" },
          { id: 3, title: "АВЫВ-1", percent: "да" },
        ];
      } else {
        return [
          { id: 1, title: "ИСМБ-18-1", percent: "да" },
          { id: 2, title: "ВАОА-12", percent: "нет" },
          { id: 3, title: "АВЫВ-1", percent: "да" },
        ];
      }
    },
  },
};
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
#fondper {
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
form {
  justify-content: center;
}
#remove {
  width: auto;
  height: auto;
  color: rgb(212, 211, 211);
}
#remove:hover {
  color: black;
}
label {
  padding-left: 5px;
}
</style>
