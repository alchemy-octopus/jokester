<template>
  <div id="app">
    <header>
      <nav v-if="user">
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </header>
    
    <main>
      <img alt="Vue logo" src="../assets/logo.png">
      <RouterView v-if="user" :user="user"/>
      <!-- Coming from the app component: {{result}} -->
    
      <Auth v-else
        :onSignUp="handleSignUp"
        :onSignIn="handleSignIn"/>
    </main>
  </div>
</template>

<script>
import api from '../services/api';
// import Home from '../home/Home';
import Auth from './auth/Auth';


export default {
  data() {
    return {
      // result: null,
      user: false
    };
  },
  components: {
    Auth 
  },
  created() {
    api.test()
      .then(result => this.result = result);
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>