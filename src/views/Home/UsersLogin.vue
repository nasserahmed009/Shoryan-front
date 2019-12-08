<template>
  <div>
    <div class="container">
      <form>
        <h4 class="bold">Login</h4>
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  max-width: 700px;
  margin: 0 auto;
}
</style>
