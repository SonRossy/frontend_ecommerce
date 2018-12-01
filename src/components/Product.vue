<template>
  <div @click="displayProductView()" >
    <div class="card" style="width:200px">
      <img class="card-img-top" :src="product.url" alt="Card image" style="width:100%">
      <div class="card-body">
        <p class="card-text">{{product.name}}</p>
        <p class="card-text">${{product.price}}</p>
          <a v-if="isItemInCart==false" @click.stop.prevent="addToCart" href="#" class="btn btn-primary">Add to Cart</a>
        <div v-else>
          <div>
            <a  @click.prevent.stop="addingUnit" href="#" class="btn btn-primary mr-2">+</a>
            <span class="mr-2">{{product.qt}}</span>
            <a  @click.prevent.stop="deductUnit" href="#" class="btn btn-primary mr-2">-</a>
          </div>
        </div>
      </div>
      <div v-show="showProductDetails" class="mr-2"  id="test2" style="z-index: 2;position: absolute; top: 0px; left: 100px;">
        <button>&times;</button>
        <h2>{{product.name}}</h2>
        <h4>{{product.category}}</h4>
        <h5>Nutrition Facts</h5>
        Serving Size 1 apple
        Servings Per Container1
        <br>
        <h6>Amount Per ServingCalories</h6>
        95
        Calories from Fat
        3
        <br>
        <h6>Total Fat</h6>
        0.3 g 0 Saturated Fat
        0.1 g 0 Trans Fat
        0 g
        Polyunsaturated Fat
        0.1 g
        Monounsaturated Fat
        0g
        Cholesterol
        0 mg 0 Sodium
        2 mg 0 Potassium
        195 mg 4 Total Carbohydrate
        25g 8Dietary Fiber
        4.4g 17 Sugars 18.9 g Other Carbohydrates 2 gProtein
        0.5g
        Vitamin A
        2
        Vitamin C
        11
        Calcium
        1
        Iron
        0
      </div>
  </div>
  </div>
</template>

<script>
import {bus} from '../main'
import ViewProudct from './ViewProduct'
export default {
  props: ['product', 'isCartEmpty'],
  data () {
    return {
      isItemInCart: false,
      numberOfItem: this.$props.product.qt,
      cartIncrease: 0,
      cartDecrease: 0,
      showProductDetails: false
    }
  },
  methods: {
    addToCart () {
      this.isItemInCart = true
      this.$props.product.qt++
      this.cartIncrease++
      bus.$emit('itemAdded', this.$props.product)
      bus.$emit('cartIncrease', this.cartIncrease)
    },
    addingUnit () {
      this.$props.product.qt++
      this.cartIncrease++
      bus.$emit('cartIncrease', this.$props.product)
    },
    deductUnit () {
      this.$props.product.qt--
      this.cartDecrease--
      if (this.$props.product.qt < 1) {
        this.isItemInCart = false
      }
      bus.$emit('cartDecrease', this.$props.product)
    },
    displayProductView () {
      this.showProductDetails = !this.showProductDetails
    }
  },
  created () {
    // this.showProductDetails = this.$props.product.name
    bus.$on('isCartEmpty', (isCartEmpty) => {
      if (isCartEmpty) {
        this.isItemInCart = false
        this.$props.product.qt = 0
      }
    })
  },
  components: {
    'viewProudct': ViewProudct
  }
}
</script>

<style>

#test2{
  width: 400px;
  height: 400px;
  border-style: solid;
  background: blue;
  align-items: center;
  margin: auto;
  text-align: center;
}
</style>
