<template>
  <div class="bg-primary ">
    <i class="fa fa-shopping-cart " style="font-size:48px"></i>
    <div class="glyphicon glyphicon-shopping-cart" v-if="this.totalOfcartItem>0">
      <hr style="height:1px;border:none;color:#333;background-color:#333;">
      <div style="font-weight: bold "  class="text-dark row items"   v-if="item.quantity>0" v-for="item in this.cartItems" :key="item.ids">
        <p class="col-sm-4">{{item.name}} </p>
        <p class="col-sm-4">Qty: {{item.quantity}} </p>
        <p class="col-sm-4">${{(item.price*item.quantity).toFixed(2)}} </p>
      </div>
      <hr style="height:1px;border:none;color:#333;background-color:#333;">
      <div class="row text-dark row total" style="font-weight: bold ">
        <div class="col-md-8">
          Total:
        </div>
        <div class="col-md-4">
          $ {{this.total.toFixed(2)}}
        </div>
        <br>
        <br>
        <div class="row container btns" >
          <div class="col-md-6">
            <input @click="pay()" class="form-control btn bg-success text-dark" type="button" style="font-weight: bold" value="Pay">
          </div>
          <div class="col-md-6 text-dark row">
            <input @click="clearCart()" class="form-control btn bg-warning text-dark" type="button" style="font-weight: bold; "  value="Empty">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {bus} from '../main'
export default {
  props: [],
  data () {
    return {
      cartItems: [],
      totalOfcartItem: 0,
      itemAdded: null,
      total: 0,
      isCartEmpty: true
    }
  },
  created () {
    bus.$on('itemAdded', (itemAdded) => {
      this.itemAdded = itemAdded
      this.cartItems.push(this.itemAdded)
      this.isCartEmpty = false
      this.total += itemAdded.price
      bus.$emit('isCartEmpty', this.isCartEmpty)
    })
    bus.$on('cartIncrease', (product) => {
      this.totalOfcartItem++
      if (product.price) {
        this.total += product.price
      }
    })
    bus.$on('cartDecrease', (product) => {
      this.totalOfcartItem--
      this.total -= product.price
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].quantity < 1) {
          this.cartItems.splice(i, 1)
        }
      }
    })
  },
  methods: {
    clearCart () {
      this.cartItems = []
      this.total = 0
      this.totalOfcartItem = 0
      this.isCartEmpty = true
      bus.$emit('isCartEmpty', this.isCartEmpty)
    },
    pay () {
      let paypalForm = `
   <form id="paypal-form" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_cart">
        <input type="hidden" name="upload" value="1">
        <input type="hidden" name="business" value="adrian@webdev.tube">
        `
      this.cartItems.forEach((cartItem, index) => {
        console.log(this.cartItems)
        ++index
        paypalForm += `
        <input type="hidden" name="item_name_${index}" value="${cartItem.name}">
        <input type="hidden" name="amount_${index}" value="${cartItem.price}">
        <input type="hidden" name="quantity_${index}" value="${cartItem.quantity}">
        `
      })
      paypalForm += `<input type="submit" value="PayPal"> </form> <div class="overlay"></div>`
      document.querySelector('body').insertAdjacentHTML('beforeend', paypalForm)
      document.getElementById('paypal-form').submit()
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btns{
    margin: 0 auto;
  }
  .items{
    margin: 0 auto;
  }
  .total{
    margin: 0 auto;
  }
</style>
