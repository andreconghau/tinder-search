<template>
  <div>
    # {{item.id}} - {{item.name}}
  </div>
</template>
<script>
  export default {
    name: 'comp-user-item',
    props: {
      titleHeader: {type: String, default: ""},
      item: {type: Object, default: {}}
    },
    data() {
      return {
      }
    }
  }
</script>
<style></style>
