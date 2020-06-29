<template>
  <div>
    # {{item.id}} - {{item.name}}
    <button v-on:click="deleteUser()">Delete</button>
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
    },
    methods: {
      deleteUser() {
        console.log("DeleteUser add use.vue");
        const data = {
          id : this.item.id,
          name: this.item.name
        };
        this.$emit('UserListDeleteUser', data);
      }
    }
  }
</script>
<style></style>
