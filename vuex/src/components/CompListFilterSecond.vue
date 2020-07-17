<template>
  <div class="container">
    <h2>List Filter</h2>
    <form>
      <div class="form-group">
        <label for="exampleInput2">Filter Text</label>
        <input type="email" class="form-control" id="exampleInput2" aria-describedby="emailHelp"
               placeholder="Enter email" v-model="textSearch">
        <small id="emailHelp" class="form-text text-muted">Filter by name.</small>
        <ul class="list-group products-list">
          <li class="list-group-item" v-for="product in filterProductName" v-bind:key="product">{{product}}</li>
        </ul>
      </div>
    </form>
  </div>
</template>


<script>
  import {ProductsMixin} from '../mixins/productsMixin.js';

  export default {
    name: "CompListFilterSecond",
    mixins: [ProductsMixin]
  }
</script>

<style>
  .products-list li {
    display: block !important;
    list-style-type: circle !important;
  }
</style>
