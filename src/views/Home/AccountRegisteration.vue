<template>
  <div>
    <form>
      <div class="register-form row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate" required />
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" required />
          <label for="last_name">Last Name</label>
        </div>
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" required />
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" required />
          <label for="password">Password</label>
        </div>
        <div class="input-field col s12">
          <input id="phonenumber" type="text" class="validate" />
          <label for="phonenumber">Phone Number</label>
        </div>
        <div class="input-field col s12">
          <input id="address" type="text" class="validate" required />
          <label for="address">Address</label>
        </div>
        <button
          class="btn waves-effect waves-light right"
          type="submit"
          name="action"
        >
          Register
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
.register-form {
  padding-top: 20px;
  margin-left: 250px;
  width: 600px;
}
</style>
