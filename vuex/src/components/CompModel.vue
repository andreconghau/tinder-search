<template>
  <div>
    <input type="text" :value="valueInput" @input="updateValue">
    <h2>Vuex V-Model: {{valueInput}}</h2>
    Demo set get v-model
    <input type="text" v-model="valueInputSetGet">
  </div>
</template>


<script>
  import {mapMutations} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: "CompModel",
    data() {
      return {
        title: "Vuex V-Model"
      }
    },
    methods: {
      updateValue(event) {
        console.log(event.target.value);
        this.$store.dispatch('syncUpValue', {value: event.target.value});
      }
    },
    computed: {
      valueInput() {
        return this.$store.getters.getValue;
      },
      valueInputSetGet: {
        set(valueInputSetGet){
          this.$store.dispatch('syncUpValue', {value: valueInputSetGet});
        },
        get(){
          return this.$store.getters.getValue;
        }
      }
    }
  }
</script>

<style>

</style>
