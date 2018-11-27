<template>
  <div>
    <div class="card" style="width:200px">
      <img class="card-img-top" src="../assets/apple.jpg" alt="Card image" style="width:100%">
      <div class="card-body">
        <p class="card-text">{{product.name}}</p>
        <p class="card-text">${{product.price}}</p>
          <a v-if="isItemInCart==false" @click.prevent="addToCart" href="#" class="btn btn-primary">Add to Cart</a>
        <div v-else>
          <div>
            <a  @click.prevent="addingUnit" href="#" class="btn btn-primary mr-2">+</a>
            <span class="mr-2">{{product.qt}}</span>
            <a  @click.prevent="deductUnit" href="#" class="btn btn-primary mr-2">-</a>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import {bus} from '../main'
export default {
  props: ['product', 'isCartEmpty'],
  data () {
    return {
      isItemInCart: false,
      numberOfItem: this.$props.product.qt,
      cartIncrease: 0,
      cartDecrease: 0
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
    }
  },
  created () {
    bus.$on('isCartEmpty', (isCartEmpty) => {
      if (isCartEmpty) {
        this.isItemInCart = false
        this.$props.product.qt = 0
      }
    })
  }
}
</script>

<style>

</style>
