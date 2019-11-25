<template>
  <div>
    <h1>hello</h1>
    <div v-for="post in posts" :key="post.userId">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: null
    };
  },
  mounted() {
    this.axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(Response => {
        this.posts = Response.data;
      });
  },
  name: "HelloWorld"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
