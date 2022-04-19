import { createStore } from 'vuex'
import {TYPE_AUDS, TYPE_MAGS_LECTIONS, TYPES_MAGS_SPLITTED} from "../consts"
import _ from 'lodash';

export default createStore({
  state() {
    return {
      items: {
        [TYPE_AUDS]: [
          { id: 1, title: "А105", percent: "55%" },
          { id: 2, title: "Б212", percent: "24%" },
          { id: 3, title: "И304", percent: "15%" },
          { id: 4, title: "В02", percent: "55%" },
          { id: 5, title: "А203", percent: "24%" },
          { id: 6, title: "Г220", percent: "100%" },
        ],
        [TYPES_MAGS_SPLITTED]: [
          { id: 1, title: "ИСМБ-18-1", percent: "да" },
          { id: 2, title: "ВАОА-12", percent: "нет" },
          { id: 3, title: "АВЫВ-1", percent: "да" },
        ],
        [TYPE_MAGS_LECTIONS]: [
          { id: 1, title: "ИСМБ-18-1", percent: "да" },
          { id: 2, title: "ВАОА-12", percent: "нет" },
          { id: 3, title: "АВЫВ-1", percent: "да" },
        ]
      }
    }
  },
  getters: {
    averageValues(state) {
      return _(state.items).map((subItems, key) => {
          let avg = _.meanBy(subItems, a => {
              let left = a.percent || a;
              if(left === "да") 
                left = 100;
              else if(left === "нет") 
                left = 0;
              let avg = Number.parseInt(left);
              return avg
          })
          return [key, avg];
      }).fromPairs().value();
    },
    totalAverage(state, getters) {
        let tAvg = _(getters.averageValues).values().mean().toFixed([2]);
        return tAvg;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
