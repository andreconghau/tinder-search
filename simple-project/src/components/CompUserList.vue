<template>
  <div>
    <h2>{{ title }}</h2>
    <comp-user-item v-bind:titleHeader="component_header_text"
                    v-for="item in items"
                    v-bind:key="item.id" v-bind:item="item" v-if="item.visible">
    </comp-user-item>
    <button v-on:click="onLickEventUp">Event up Chagne title</button>
  </div>

</template>
<script>
  import CompUserItem from "./CompUserItem";

  const items = [
    {id: 1, name: "Andre", visible: true},
    {id: 2, name: "Thomas", visible: true},
    {id: 3, name: "Steve", visible: true},
    {id: 4, name: "Nelson", visible: false},
    {id: 5, name: "Jason", visible: true}
  ];
  export default {
    name: 'comp-user-list',
    props: {
      title: {type: String, default: "title default"}
    },
    data() {
      return {
        component_header_text: "User list :",
        items: items
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
        this.$emit('myEventUpTest', {title: "anc"});
        // return console.log(e);
      }
    }
  }
</script>
<style></style>
