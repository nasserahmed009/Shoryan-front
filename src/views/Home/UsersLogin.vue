<template>
  <div>
    <form>
      <div class="login-form row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" required />
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" required />
          <label for="password">Password</label>
        </div>
        <button
          class="btn waves-effect waves-light right"
          type="submit"
          name="action"
        >
          Login
          <i class="material-icons right">send</i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login-form {
  padding-top: 20px;
  padding-bottom: 15px;
  width: 500px;
  margin-left: 250px;
}
</style>
