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
import axios from 'axios'
import {bus} from './main'
export default {
  name: 'App',
  created () {
    // ProcessPayment.methods.checkout()
    // making call to our back end api to get the products
    axios.get('http://localhost:8080/products', {
    })
      .then(response => {
        console.log(response.data)
        this.products = response.data
        this.productsFromApi = response.data
      })
      .catch(e => {
        console.log('error', e)
      })
    bus.$on('currentDisplay', (nameOrCategory) => {
      this.products = this.productsFromApi
      this.products = this.products.filter(data => {
        // if search or category is all then we return the whole product list
        if (nameOrCategory === 'all') {
          return this.products
        }
        // but if it is equal to a name of product then we return the name or category
        return (data.name.startsWith(nameOrCategory)) || (data.category.startsWith(nameOrCategory))
      })
    })
  },
  data () {
    return {
      products: [],
      productsFromApi: [],
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
  .mainDiv{
    background: aliceblue;
  }
</style>
