<template>
  <div>
    <h2>{{ title }}</h2>
    <comp-user-item v-bind:titleHeader="component_header_text"
                    v-for="user in users"
                    v-bind:key="user.id" v-bind:user="user" v-if="user.visible">
    </comp-user-item>
    <button v-on:click="onLickEventUp">Event up Chagne title</button>
  </div>

</template>
<script>
  import CompUserItem from "./CompUserItem";

  export default {
    name: 'comp-user-list',
    props: {
      title: {type: String, default: "title default"},
      users: {type: Array, default: []}
    },
    data() {
      return {
        component_header_text: "User list :",
        users: this.users
      }
    },
    components: {
      CompUserItem
    },
    methods: {
      onLickEventUp(){
        const data = {
          title: 'Event up from user list'
        };
        this.$emit('myEventUpTest', data);
        // return console.log(e);
      }
    }
  }
</script>
<style></style>
