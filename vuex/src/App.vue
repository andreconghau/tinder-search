<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Vuex</h2>
    <comp-counter/>
    <comp-up-down/>
    <hr/>
    <comp-model/>
  </div>
</template>

<script>

  import CompUpDown from "./components/CompUpDown";
  import CompCounter from "./components/CompCounter";
  import CompModel from "./components/CompModel";

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      CompUpDown,
      CompCounter,
      CompModel
    }
  }
</script>

<style lang="scss">
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
