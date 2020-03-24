<template>
  <div class="filter">
    <label :for="id">{{label}}</label>

    <select :id="id" v-model="selectedOption">
      <option v-for="option in options" :key="option.id" :value="option.id">{{option.label}}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: [
    "model", "id", "label"
  ],
  data() {
    return {
      selectedOption: {}
    }
  },
  computed: {
    options: function(){
      return this.model[this.id].children;
    }
  },
  updated() {
    this.$emit("filter-selected", {"id": this.id, "value": this.selectedOption});
  }
}
</script>

<style scoped>
