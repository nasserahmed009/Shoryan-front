<template>
  <div>
    <h1>test upload</h1>

    <h1>File Upload Using Angular 5 and ASP.NET Core 2.1</h1>
    <input type="file" multiple @change="upload($event.target.files)" />
    <br />
  </div>
</template>

<script>
export default {
  methods: {
    async upload(files) {
      if (files.length == 0) return;

      let formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("profilePic", files[i], i + ".jpg");
      }

      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }
      const response = await this.axios.post(
        `${this.$store.state.baseApiUrl}uploadListings/1`,
        formData
      );
      console.log(response);
    }
  }
};
</script>
