<template>
  <div>
    <h2>Counter is: {{getCounter}}</h2>
    <h2>Getters with (counter*10)) => {{getterTenTimes}}</h2>
    <h2>MapGetters with getTotalCounter => {{getTotalCounter}}</h2>
    <h2>MapGetters with counter => {{counter}}</h2>
    <h2>MapMutation with counter =></h2>
  </div>
</template>


<script>

  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'

  export default {
    name: "CompCounter",
    data() {
      return {
        title: "Counter Comp"
      }
    },
    computed: {
      getCounter() {
        return this.$store.state.counter;
      },
      getterTenTimes() {
        return this.$store.getters.getTotalCounter;
      },
      ...mapGetters({
        // map `this.doneCount` to `this.$store.getters.doneTodosCount`
        counter: 'getCounter',
        getTotalCounter: 'getTotalCounter'
      }),
    },
  }
</script>

<style>

</style>
