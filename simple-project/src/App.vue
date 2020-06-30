<template>
  <div id="app">
    <img src="./assets/logo.png">
    <comp-header v-bind:title="title" v-on:myEventUpTest="handleChangeTitle"></comp-header>
    <comp-user-list v-bind:title="title" v-on:myEventUpTest="handleChangeTitle" v-bind:users="users"
                    v-on:AppDeleteUser="deleteUser"></comp-user-list>
    <comp-footer v-bind:title="title" v-on:myEventUpTest="handleChangeTitle"></comp-footer>
    <comp-upload-avatar/>
    <comp-text-slot>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </comp-text-slot>
  </div>
</template>

<script>
  import CompHeader from "./components/CompHeader.vue";
  import CompUserList from "./components/CompUserList";
  import CompFooter from "./components/CompFooter";
  import CompUploadAvatar from "./components/CompUploadAvatar";
  import CompTextSlot from "./components/CompTextSlot";

  const items = [
    {id: 1, name: "Andre", visible: true},
    {id: 2, name: "Thomas", visible: true},
    {id: 3, name: "Steve", visible: true},
    {id: 4, name: "Nelson", visible: false},
    {id: 5, name: "Jason", visible: true}
  ];

  export default {
    name: 'app',
    data() {
      return {
        title: "test change title event up",
        users: items
      }
    },
    components: {
      CompHeader,
      CompUserList,
      CompFooter,
      CompUploadAvatar,
      CompTextSlot
    },
    methods: {
      handleChangeTitle(data) {
        console.log(data);
        this.title = data.title;
      },
      deleteUser(data) {
        console.log("DeleteUser add app.vue");
        console.log(data);
        let index_deleted = -1;
        this.users.forEach((element, index) => {
          if (element.id == data.id) {
            // console.log(index, element.id, element.name);
            index_deleted = index;
          }
        });
        console.log(index_deleted);
        this.users.splice(index_deleted, 1);
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
