<template>
<header>
  <h1>{{ header_text }}</h1>
  <h2>{{ title }}</h2>
</header>
</template>

<script>
export default {
  name: 'CompHeader',
  data () {
    return {
      header_text : "VUE TEXT from COMP Footer"
    };
  },
  props: {
    title: {type: String, default: "title default"}
  }
}
</script>


<style>

</style>
