<template>
  <div id="app">
    <keep-alive>
   <router-view/>
      </keep-alive>
    <Header-vue :showProduct="showProduct" class="fixed-top" ></Header-vue>
    <div v-show="showProduct.yes" class="container" >
      <div class="row">
        <keep-alive>
        <div class="col-md-10 form-inline">
          <Product v-for="product in products" :product="product" :key="product.id" class="mr-4 mb-4"></Product>
        </div>
          </keep-alive>
        <div class="col-md-2 container">
          <div class="float-left shoppingCart bg-secondary" >
             <Cart-vue class="mainDiv" :products="products"></Cart-vue>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from './components/Product'
import Header from './components/Header'
import Cart from './components/Cart'
import {bus} from './main'
export default {
  name: 'App',
  created () {
    var dummy = [
      {id: 1, name: 'apple', price: 2.1, category: 'fruit', qt: 0},
      {id: 2, name: 'orange', price: 1.23, category: 'fruit', qt: 0},
      {id: 3, name: 'lettuce', price: 0.98, category: 'vegetable', qt: 0},
      {id: 4, name: 'berry', price: 1.99, category: 'fruit', qt: 0},
      {id: 5, name: 'goat', price: 3.64, category: 'meat', qt: 0},
      {id: 6, name: 'broccoli', price: 0.98, category: 'vegetable', qt: 0},
      {id: 7, name: 'strawberry', price: 1.99, category: 'fruit', qt: 0},
      {id: 8, name: 'beef', price: 3.64, category: 'meat', qt: 0}
    ]
    this.products = dummy
    bus.$on('currentDisplay', (category) => {
      this.products = dummy
      this.products = this.products.filter(data => {
        if (category === 'fruit') {
          return (data.category === 'fruit')
        } else if (category === 'meat') {
          return (data.category === 'meat')
        } else if (category === 'vegetable') {
          return (data.category === 'vegetable')
        } else {
          return this.products
        }
      })
      console.log(this.products)
    })
  },
  data () {
    return {
      products: [],
      showProduct: {yes: true}
    }
  },
  components: {'Product': Product,
    'Header-vue': Header,
    'Cart-vue': Cart
  }
}
</script>

<style>
.container{
  margin-top: 2%;
}
  .shoppingCart{
    position: fixed;
  }
.mainDiv{
  overflow-y: scroll;
  max-height: 400px;
  // width: 100%;
}
</style>
