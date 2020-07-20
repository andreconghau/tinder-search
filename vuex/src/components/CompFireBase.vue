<template>
  <div class="container">
    <div class="row">
      <h2>FireBase Demo</h2>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
             placeholder="Enter email" v-model="user.email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
             v-model="user.password">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary" @click="saveFB">Save</button>
  </div>
</template>


<script>

  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'

  export default {
    name: "CompFireBase",
    data() {
      return {
        title: "FireBase Comp",
        user: {
          email: '',
          password: ''
        }
      }
    },
    computed: {},
    methods: {
      saveFB() {
        console.log(this.user);
        this.$http.post('https://vuex-bde34.firebaseio.com/user.json', this.user).then(res => {
          console.log(res);
          this.user.email = '';
          this.user.password = '';
        }, error => {
          console.log(error);
        });
      }
    }
  }
</script>

<style>

</style>
