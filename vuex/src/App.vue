<template>
  <div id="app">
    <button v-on:click="changeMsg">Test Watch</button>
    <img src="./assets/logo.png">
    <h1>{{ msg | toUpperCase}}</h1>
    <h2>{{ label | toLowerCase}}</h2>
    <comp-counter/>
    <comp-up-down/>
    <hr/>
    <comp-model/>
    <hr/>
    <comp-list-filter/>
    <comp-list-filter-second/>
  </div>
</template>

<script>

  import CompUpDown from "./components/CompUpDown";
  import CompCounter from "./components/CompCounter";
  import CompModel from "./components/CompModel";
  import CompListFilter from "./components/CompListFilter";
  import CompListFilterSecond from "./components/CompListFilterSecond";

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        label: 'Vue Practice'
      }
    },
    components: {
      CompUpDown,
      CompCounter,
      CompModel,
      CompListFilter,
      CompListFilterSecond
    },
    watch: {
      msg(newValue) {
        console.log(`watch changed: ${newValue}`);
      }
    },
    methods: {
      changeMsg() {
        this.msg = "Change new value";
      }
    },
    filters: {
      toUpperCase(text) {
        return text.toUpperCase();
      }
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
