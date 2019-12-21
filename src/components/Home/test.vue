<template>
  <div>
    <h1>test upload</h1>

    <h1>File Upload Using Angular 5 and ASP.NET Core 2.1</h1>
    <input
      type="file"
      multiple
      @change="uploadProfilePic($event.target.files[0])"
    />
    <br />
  </div>
</template>

<script>
export default {
  methods: {
    async upload(files) {
      console.log(files);
      if (files.length == 0) return;
      let formData = new FormData();
      for (let file of files) {
        formData.append("profilePic", file, "1.jpg");
      }
      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      const response = await this.axios.post(
        `${this.$store.state.baseApiUrl}upload`,
        formData
      );
      console.log(response);
    }
  }
};
</script>
