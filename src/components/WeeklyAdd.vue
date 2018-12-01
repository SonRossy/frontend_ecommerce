<template>
  <div class="container" style="margin-top: 6%">
    <div id="demo" class="carousel slide" data-ride="carousel">
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
        <li data-target="#demo" data-slide-to="3"></li>
      </ul>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/4.jpg" alt="Los Angeles" width="100%" height="100%">
          <div class="carousel-caption">
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/2.png" alt="Chicago" idth="100%" height="100%">
          <div class="carousel-caption">
          </div>
        </div>
        <div class="carousel-item">
        <img src="../assets/3.jpg" alt="New York" idth="100%" height="100%">
        <div class="carousel-caption">
        </div>
      </div>
        <div class="carousel-item">
          <img src="../assets/5.jpg" alt="New York" idth="100%" height="100%">
          <div class="carousel-caption">
          </div>
        </div>
    </div>
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .carousel-inner img {
    width: 100%;
    height: 100%;
  }
</style>
