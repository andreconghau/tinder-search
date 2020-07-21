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
    <table>
      <tr v-if="users.length > 0">
        <th>ID</th>
        <th>Email</th>
        <th>Password</th>
      </tr>
      <tr v-for="user in users">
        <td>{{user.id}}</td>
        <td>{{user.email}}</td>
        <td>{{user.password}}</td>
      </tr>
    </table>
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
        },
        users: []
      }
    },
    computed: {
      list() {
      }
    },
    methods: {
      saveFB() {
        if (this.user.email != '' && this.user.password != '') {
          console.log(this.user);
          this.$http.post('https://vuex-bde34.firebaseio.com/user.json', this.user).then(res => {
            const res_data = res.json();
            console.log(res.body.name);
            console.log(res_data);
            this.users.push({
              id: res.body.name,
              email: this.user.email,
              password: this.user.password
            });
            this.user.email = '';
            this.user.password = '';
          }, error => {
            console.log(error);
          });
        }
      }
    },
    created() {
      this.$http.get('https://vuex-bde34.firebaseio.com/user.json').then(res => {
        // console.log(res.json());
        return res.json();
      }, error => {
        console.log(error);
      }).then(data => {
        console.log(data);
        const arrayList = [];
        for (let key in data) {
          console.log(key);
          arrayList.push({
            id: key,
            email: data[key].email,
            password: data[key].password
          });
        }
        this.users = arrayList;
      });
    }
  }
</script>

<style>

</style>
