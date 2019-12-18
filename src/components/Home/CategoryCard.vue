<template>
  <div>
    <router-link
      :to="{ name: 'SingleCategory', params: { categoryId: category.id } }"
    >
      <div class="CategoryCardContainer center">
        <div class="CategoryCard grey lighten-3 hoverable">
          <i class="material-icons">child_care</i>
          <h5>{{ category.name }}</h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    //this component expects to recieve a category object
    category: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.CategoryCardContainer {
  margin: 10px 0px;
  cursor: pointer;
}
.CategoryCard {
  padding: 40px 0px;
}
</style>
