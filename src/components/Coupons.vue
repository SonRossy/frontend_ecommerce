<template>
  <div class="container">
    <div class=" form-inline" style="margin-top: 8%">
      <div v-for="coupon in coupons" :key="coupon.name" class="card mr-4 mb-4 container" style="width:200px; height: 220px">
        <div class="card-body">
          <h3><p class="card-text" style="font-weight: bold; color: blue"> Save ${{coupon.save}}</p></h3>
          <h5 class="card-text" style="font-weight: bold; color: orange">{{coupon.name}}</h5>
          <p class="card-text">{{coupon.deal}}</p>
        </div>
      </div>
    </div>
    <div class="center-block">
      <input @click.prevent="printPage()" style="margin: 0 auto" type="button" class="btn-primary center-block" value="Print Coupon Page">
    </div>
    <br>
  </div>
</template>

<script>
export default {

  data () {
    return {
      coupons: []
    }
  },
  methods: {
    printPage () {
      window.print()
    }
  },
  created () {
    let coupons = [
      {save: 1.00, name: 'Kellogg\'s frosted', deal: 'on any Two Kellogg\'s'},
      {save: 1.00, name: 'Big G Cereals', deal: 'when you buy Two Boxes on any flavor'},
      {save: 1.23, name: 'Glade', deal: 'on any Two Glade products (exclude Spray)'},
      {save: 0.30, name: 'Pillsbury', deal: 'when you buy one can any size'},
      {save: 4.00, name: 'Del Monte Fruit Cup', deal: 'when you spend $12 on qualifying Fel Monte Fruit Cup'},
      {save: 0.50, name: 'Yoplait', deal: 'when you buy 5 cups any variety Yoplait'},
      {save: 0.55, name: 'Herdez', deal: 'on the purchase of any One'},
      {save: 0.50, name: 'Nature Valley', deal: 'when you buy two boxes any flavor'},
      {save: 2.00, name: 'Kitchen Stater Kit', deal: 'on any One Today \'s chicken stater kit'},
      {save: 0.75, name: 'Sister Schubert', deal: 'on any frozen roll or bread product'},
      {save: 1, name: 'Celestial Seasonings Tea', deal: 'on tow Celestial Seasoning box'},
      {save: 3, name: 'Blue Buffalo', deal: 'on any one bag blue of dog treats'}
    ]
    this.coupons = coupons
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
