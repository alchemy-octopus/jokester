<template>
  <section class="thing">
      <h3>Use this app to have a little fun and learn new jokes.
          The jokes are family friendly and for all ages. You can
          search jokes, add your jokes, rate jokes, and build a set list.</h3>
    <div class="sign" v-if="method === 'signin'">
      <h3>Sign In</h3>
      <p>
        Need to register?
        <button @click="method = 'signup'">Sign Up</button>
      </p>
      <CredentialsForm prompt="Sign In" :onSubmit="handleSignIn"/>
    </div>
    <div class="sign" v-else>
      <h3>Sign Up</h3>
      <p>Already have an account?
        <button @click="method = 'signin'">Sign In</button>
      </p>
      <CredentialsForm prompt="Sign Up" :onSubmit="handleSignUp"/>
    </div>
    <pre v-if="error">{{error}}</pre>
  </section>
</template>

<script>
import CredentialsForm from './CredentialsForm';

export default {
  props: {
    onSignIn: Function,
    onSignUp: Function
  },
  data() {
    return {
      method: 'signin',
      error: ''
    };
  },
  components: {
    CredentialsForm
  },
  methods: {
    handleSignIn(profile) {
      this.error = '';

      this.onSignIn(profile)
        .catch(error => {
          this.error = error.error;
        });
    },
    handleSignUp(profile) {
      this.error = '';
      
      this.onSignUp(profile)
        .catch(error => {
          this.error = error.error;
        });
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  padding: 10px 0;
}
pre {
  color: red;
}
section {
  margin: auto;
  width: 40%;
  color: gray;
}
body {
  
}
.sign {
  margin: auto;
  padding-left: 30px;
  width: 100%;
  border: 1px solid black;
  background: lightgray; 
  color: black;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, .5);
  border-radius: 5px;
}

</style>

     