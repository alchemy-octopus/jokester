<template>
  <section>
    <div v-if="method === 'signin'">
      <h2>Sign In</h2>

      <p>
        Need to register?
        <button @click="method = 'signup'">Sign Up</button>
      </p>

      <form @submit.prevent="handleSignInSubmit(profile)">
        <label>
          Username:
          <input type="text">
        </label>
        <label>
          Password:
          <input type="password">
        </label>
        <label>
         <button>Sign In</button>
        </label>
      </form>
    </div>

    <div v-else>
      <h2>Sign Up</h2>

      <p>Already have an account?
        <button @click="method = 'signin'">Sign In</button>
      </p>

      <form>
        <label>
          Username:
          <input type="text">
        </label>
        <label>
          Password:
          <input type="password">
        </label>
        <label>
         <button>Sign In</button>
        </label>
      </form>
    </div>
    <pre v-if="error">{{ error }}</pre>
  </section>
</template>

<script>
export default {
  props: {
    onSignIn: Function,
    onSignUp: Function
  },
  data() {
    return {
      method: 'signin',
      error: '',
      profile: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    handleSignInSubmit() {
      this.error = '';

      this.onSignIn(this.profile)
        .catch(error => {
          this.error = error.error;
        });
    },
    handleSignUpSubmit() {
      this.error = '';

      this.onSignUp(this.profile)
        .catch(error => {
          this.error = error.error;
        });
    }
  }
};
</script>

<style>

</style>
