<template>
  <div>
    # {{user.id}} - {{user.name}}
  </div>
</template>
<script>
  export default {
    name: 'comp-user-item',
    props: {
      titleHeader: {type: String, default: ""},
      user: {type: Object, default: {}}
    },
    data() {
      return {
      }
    }
  }
</script>
<style></style>
