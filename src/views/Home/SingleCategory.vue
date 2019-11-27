<template>
  <div>
    <div class="pageHeader grey lighten-2">
      <div class="col s12 grey-text">
        <a href="#!" class="breadcrumb grey-text">First</a>
        <a href="#!" class="breadcrumb grey-text">Second</a>
        <a href="#!" class="breadcrumb grey-text">Third</a>
      </div>

      <h3 class="bold">
        Category Name
      </h3>
    </div>

    <h4>Drugs in this category</h4>
    <div class="row">
      <ItemCard v-for="i in 15" :key="i" />
    </div>

    <ul class="pagination right">
      <li class="disabled">
        <a href="#!"><i class="material-icons">chevron_left</i></a>
      </li>
      <li class="active"><a href="#!">1</a></li>
      <li class="waves-effect"><a href="#!">2</a></li>
      <li class="waves-effect"><a href="#!">3</a></li>
      <li class="waves-effect"><a href="#!">4</a></li>
      <li class="waves-effect"><a href="#!">5</a></li>
      <li class="waves-effect">
        <a href="#!"><i class="material-icons">chevron_right</i></a>
      </li>
    </ul>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  components: {
    ItemCard: () => import("@/components/Home/ItemCard")
  }
};
</script>

<style lang="scss" scoped>
.pageHeader {
  padding: 20px;
  margin: 20px 0px;
}

.breadcrumb:before {
  color: #9e9e9e;
  vertical-align: middle;
}
</style>
