export const ProductsMixin = {
  data() {
    return {
      products: ['samsung', 'htc', 'apple', 'sony', 'nokia', 'bphone', 'oppo', 'vsmart'],
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
