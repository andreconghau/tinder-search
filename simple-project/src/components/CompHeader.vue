<template>
  <header>
    <h1>{{ header_text }}</h1>
    <h2>{{ title }}</h2>
    <button v-on:click="onLickEventUp">Event up Chagne title</button>
  </header>
</template>

<script>
  export default {
    name: 'CompHeader',
    data() {
      return {
        header_text: "VUE TEXT from COMP HEADER"
      };
    },
    props: {
      title: {type: String, default: "title default"}
    },
    methods: {
      onLickEventUp() {
        const data = {
          title: 'Event up from HEADER'
        };
        this.$emit('myEventUpTest', data);
        // return console.log(e);
      }
    }
  }
</script>


<style>

</style>
