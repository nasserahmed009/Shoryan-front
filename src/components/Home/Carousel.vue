<template>
  <div>
    <div class="carousel">
      <a class="carousel-item" href="#one!"
        ><img
          src="https://s4.reutersmedia.net/resources/r/?m=02&d=20190612&t=2&i=1397129799&r=LYNXNPEF5B1OS&w=1280"
      /></a>
      <a class="carousel-item" href="#two!"
        ><img
          src="https://m.economictimes.com/thumb/msid-71978437,width-1200,height-900,resizemode-4,imgsize-545818/drug-randomm-getty.jpg"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $(".carousel").carousel({
      fullWidth: true,
      indicators: true
    });
  }
};
</script>

<style lang="scss" scoped>
.carousel a {
  width: 100%;
}
.carousel {
  height: 500px;
}
</style>
