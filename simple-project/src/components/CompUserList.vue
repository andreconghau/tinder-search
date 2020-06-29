<template>
  <div>
    <h2>{{ title }}</h2>
    <comp-user-item v-bind:titleHeader="component_header_text"
                    v-for="item in items"
                    v-bind:key="item.id" v-bind:item="item" v-if="item.visible"
                    v-on:UserListDeleteUser="deleteUser">
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
        items: this.users
      }
    },
    components: {
      CompUserItem
    },
    methods: {
      onLickEventUp() {
        const data = {
          title: 'Event up from user list'
        };
        this.$emit('myEventUpTest', data);
        // return console.log(e);
      },
      deleteUser(data) {
        console.log("DeleteUser add useList.vue");
        this.$emit('AppDeleteUser', data);
      }

    }
  }
</script>
<style></style>
