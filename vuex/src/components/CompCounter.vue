<template>
  <div>
    <h2>Counter is: {{counter}}</h2>
    <h2>Getters with (counter*10)) =>  {{getterTenTimes}}</h2>
  </div>
</template>


<script>
  export default {
    name: "CompCounter",
    data() {
      return {
        title: "Counter Comp"
      }
    },
    computed: {
      counter() {
        return this.$store.state.counter;
      },
      getterTenTimes() {
        return this.$store.getters.getTotalCounter;
      }
    }
  }
</script>

<style>

</style>
