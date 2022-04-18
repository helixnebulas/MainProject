<template>
  <div>
    <div>
      <h1>
        <strong>
          {{ getitem.title }}:
          <div>{{ average.toFixed([2]) }}%</div>
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
        <button type="button" class="btn btn-dark"><label id="fondname"><input type="checkbox" style="display: none" v-model="checkedTitle">Название &#129047;</label></button>
        <div id="remove">
          <label for="remove-full"><input type="checkbox" name="remove-full" value="100%" v-model="checkedFull">Убрать заполненные</label>
        </div>
        <button type="button" class="btn btn-dark"><label id="fondper"><input type="checkbox" style="display: none" v-model="checkedPer">Статус &#129047;</label></button>
      </li>
      <MoreItem v-for="a of (filteredItems)" v-bind:a="a" :key="a.id" />
    </ul>
  </div>
</template>

<script>
import MoreItem from "@/components/MoreItem";
import { ITEMS } from "@/consts";
import _ from "lodash";
export default {
  props: ["item"],
  components: {
    MoreItem,
  },
  data() {
    return {
      searchInput: "",
      listItems: null,
      checkedFull: false,
      checkedPer: false,
      checkedTitle: false,
    };
  },
  methods: {
    searching(event) {
      event.preventDefault();
    },
    sortBySize() {
      this.checkedPer = !this.checkedPer;
    }
  },
  computed: {
    type() {
      return this.$route.query.type;
    },
    filteredItems() {
      console.log(this.items);
      let preFiltered = [...this.items];
      if(this.checkedPer) {
        preFiltered = _.sortBy(preFiltered, a => Number.parseInt(a.percent));
      } else if(this.checkedTitle) {
        preFiltered = _.sortBy(preFiltered, a => a.title);
      }
      else {
        preFiltered = this.items;
      }
      if (this.searchInput != "") {
        preFiltered = preFiltered.filter(el => el.title.toLowerCase().includes(this.searchInput.toLowerCase()));;
      }
      if(this.checkedFull) {
        preFiltered = preFiltered.filter(el => isNaN(Number.parseInt(el.percent)) ? (el.percent).toString() != "да" : Number.parseInt(el.percent) < 100);
      }
      return preFiltered;
    },
    getitem() {
      return ITEMS[this.type];
    },
    title() {
      return this.getitem.title;
    },
    average() {
    // return this.items.reduce((a, b) => {
    //     let left = a.percent || a;
    //     let right = b.percent || b;
    //     if(left === "да") left = 100;
    //     else if(left === "нет") left = 0;
    //     if(right === "да") right = 100;
    //     else if(right === "нет") right = 0;
    //     return Number.parseInt(left) + Number.parseInt(right);
    //   }, 0) / this.items.length;
      // return _.meanBy(this.items, a => {
      //   let left = a.percent || a;
      //     if(left === "да") 
      //       left = 100;
      //     else if(left === "нет") 
      //       left = 0;
      //     return Number.parseInt(left)
      // })
      return this.$store.getters.averageValues[this.type];
    },
    items() {
      return this.$store.state.items[this.type];
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
#fondname:hover {
  text-decoration: underline; 
}
#fondper {
  font-weight: bold;
}
#fondper:hover {
  text-decoration: underline; 
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
