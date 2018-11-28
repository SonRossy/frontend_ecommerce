<template>
  <div class="container-fluid bg-primary">
    <h1>Son's Grocery</h1>
    <div class>
      <div class="form-inline form-row">
        <div class="col-md-8 form-group">
          <input @click="goHome()" class="form-control mr-1 btn" type="button" value="Home">
          <input @click="goToWeeklyAdd()" type="button" class="form-control mr-1 btn" value="Weekly Ad">
          <input @click="goToCoupons()"  class="form-control mr-1 btn" type="button" value="Coupons">
          <input @click="goToRecipes()" class="form-control mr-1 btn" type="button" value="Recipes">
          <div class="dropdown">
            <button v-show="this.showMenu" type="button" class="btn  dropdown-toggle" data-toggle="dropdown">Categories</button>
            <div class="dropdown-menu">
              <a @click.prevent="displayFruit()" class="dropdown-item" href="#">Fruit</a>
              <a @click.prevent="displayMeat()" class="dropdown-item" href="#">Meat</a>
              <a @click.prevent="displayVegetable()" class="dropdown-item" href="#">Vegetable</a>
              <a @click.prevent="goHome()" class="dropdown-item" href="#">Show All</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 form-group ">
          <input v-on:input="search()" v-model="searchText" class="form-control mr-1 form-control-lg search" type="text" placeholder="Search product">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {bus} from '../main'
export default {
  name: 'Header',
  props: ['showProduct'],
  data () {
    return {
      showMenu: true,
      searchText: ''
    }
  },
  methods: {
    goHome () {
      this.$router.push({name: 'Header'})
      this.$props.showProduct.yes = true
      bus.$emit('currentDisplay', 'all')
      this.showMenu = true
    },
    goToWeeklyAdd () {
      this.$router.push({name: 'weeklyAdd'})
      this.$props.showProduct.yes = false
      this.showMenu = false
    },
    goToRecipes () {
      this.$router.push({name: 'recipes'})
      this.$props.showProduct.yes = false
      this.showMenu = false
    },
    goToCoupons () {
      this.$router.push({name: 'coupons'})
      this.$props.showProduct.yes = false
      this.showMenu = false
    },
    displayFruit () {
      bus.$emit('currentDisplay', 'fruit')
    },
    displayMeat () {
      bus.$emit('currentDisplay', 'meat')
    },
    displayVegetable () {
      bus.$emit('currentDisplay', 'vegetable')
    },
    search () {
      bus.$emit('currentDisplay', this.searchText)
      this.showMenu = true
      this.$router.push({name: 'Header'})
      this.$props.showProduct.yes = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
  width: 100%;
  margin-bottom: 1%;
}
</style>
