<template>
  <div class="overview">
    <div class="overview__inner">
      <div class="overview__filters">
        <taxonomyfilter :model="filterModel" :selected="selectedFilters" id="regions" label="Regions" name="regions"/>
        <taxonomyfilter :model="filterModel" :selected="selectedFilters" id="types" label="Types" name="types" />
        <taxonomyfilter :model="filterModel" :selected="selectedFilters" id="industries" label="Industries" name="industries"/>
      </div>
      <resultlist />
    </div>
  </div>
</template>

<script>
import TaxonomyFilter from "./components/TaxonomyFilter.vue";
import ResultList from "./components/ResultList.vue";

export default {
  components: {"taxonomyfilter": TaxonomyFilter, "resultlist": ResultList},
  methods: {

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
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
