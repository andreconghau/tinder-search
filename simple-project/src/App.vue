<template>
  <div id="app">
    <img src="./assets/logo.png">
    <comp-header v-bind:title="title" v-on:myEventUpTest="handleChangeTitle"></comp-header>
    <comp-user-list v-bind:title="title" v-on:myEventUpTest="handleChangeTitle"></comp-user-list>
    <comp-footer v-bind:title="title" v-on:myEventUpTest="handleChangeTitle"></comp-footer>
  </div>
</template>

<script>
  import CompHeader from "./components/CompHeader.vue";
  import CompUserList from "./components/CompUserList";
  import CompFooter from "./components/CompFooter";

  export default {
    name: 'app',
    data() {
      return {
        title: "test change title event up"
      }
    },
    components: {
      CompHeader,
      CompUserList,
      CompFooter
    },
    methods: {
      handleChangeTitle(data) {
        console.log(data);
        this.title = data.title;
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
