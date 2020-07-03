<template>
  <div>
    <button v-on:click="up">Up</button>
    <button v-on:click="down">down</button>
    <button v-on:click="plusParam(100)">Plus Pram Mutation</button>
    <button v-on:click="minusCounterByParam({number:25})">Minus Pram mapMutation</button>
    <button v-on:click="syncUpCounter">Sync MapActions</button><button v-on:click="asyncUpCounter">ASync MapActions</button>

  </div>
</template>


<script>
  import {mapMutations} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: "CompUpDown",
    data() {
      return {
        title: "Up And Down Comp"
      }
    },
    methods: {
      up() {
        console.log("press up");
        this.$store.state.counter++;
      },
      down() {
        console.log("press down");
        this.$store.state.counter--;
      },
      plusParam(param) {
        this.$store.commit('plusCounterByParam', param);
      },
      ...mapMutations(['minusCounterByParam']),
      ...mapActions(['syncUpCounter', 'asyncUpCounter'])
    }
  }
</script>

<style>

</style>
