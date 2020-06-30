<template>
  <div>
    <button v-on:click="up">Up</button>
    <button v-on:click="down">down</button>
  </div>
</template>


<script>
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
        this.$store.state.counter ++;
      },
      down() {
        console.log("press down");
        this.$store.state.counter --;
      }
    }
  }
</script>

<style>

</style>
