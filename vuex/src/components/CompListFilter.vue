<template>
  <div class="container">
    <h2>List Filter</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Filter Text</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
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
  export default {
    name: "CompListFilter",
    data() {
      return {
        products: ['samsung', 'htc', 'apple', 'sony', 'nokia', 'bphone', 'oppo'],
        textSearch: ''
      }
    },
    computed: {
      filterProductName() {
        return this.products.filter((element) => {
          return element.match(this.textSearch);
        })
      }
    },
  }
</script>

<style>
  .products-list li {
    display: block !important;
    list-style-type: circle !important;
  }
</style>
