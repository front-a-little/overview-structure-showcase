import Vue from 'vue';
// import App from './App.vue';
//
// new Vue({
//  render: h => h(App)
// }).$mount(document.querySelector(".overview__inner"));

import ResultList from "./components/ResultList.vue";
import TaxonomyFilter from "./components/TaxonomyFilter.vue";

Vue.config.productionTip = false

const element = document.querySelector(".overview__inner");

new Vue({
  el: element,
  components: {"taxonomyfilter": TaxonomyFilter, "resultlist": ResultList},
  methods: {
    updateFilters: function(evt){
      this.selectedFilters[evt.id] = evt.value;
    }
  },
  data: function () {
    return {
      filterModel: {},
      selectedFilters: {}
    }
  },
  created(){
    this.filterModel = {
      "regions": {
        id: "regions",
        label: "Regions",
        children: [{
            id: "europe",
            label: "Europe"
          },
          {
            id: "asia",
            label: "Asia"
          },
          {
            id: "namerica",
            label: "North America"
          }
        ]
      },
      "types": {
        id: "types",
        label: "Types",
        children: [{
            id: "event",
            label: "Evemt"
          },
          {
            id: "news",
            label: "News"
          }
        ]
      },
      "industries": {
        id: "industries",
        label: "Industries",
        children: [{
            id: "agro",
            label: "Agriculture"
          },
          {
            id: "nutrition",
            label: "Health & Nutrition"
          },
          {
            id: "plastics",
            label: "Plastics & Rubber"
          }
        ]
      }
    }
  }
})
