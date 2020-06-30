<template>
  <div>
    <h2>Counter is: {{counter}}</h2>
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
      }
    }
  }
</script>

<style>

</style>
