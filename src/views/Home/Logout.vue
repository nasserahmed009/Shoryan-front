<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.$store
      .dispatch("logout")
      .then(() => {
        this.$router.push(this.$route.query.previous || "/");
      })
      .catch(err => {
        alert(err);
        this.$router.push(this.$route.query.previous || "/");
      });
  }
};
</script>
