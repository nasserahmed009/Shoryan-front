<template>
  <div>
    <Carousel />
    <div class="container">
      <h4 class="bold">Most ordered products</h4>
      <div class="row">
        <ItemCard v-for="i in 4" :key="i" />
      </div>

      <h4 class="bold">Categories</h4>
      <div class="row">
        <CategoryCard v-for="i in 6" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ItemCard: () => import("@/components/Home/ItemCard"),
    Carousel: () => import("@/components/Home/Carousel"),
    CategoryCard: () => import("@/components/Home/CategoryCard")
  }
};
</script>
