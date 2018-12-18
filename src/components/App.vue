<template>
  <div id="app">
    <header>
      <span v-if="user">
        Hello {{user.username}}!
      </span>
      <nav v-if="user">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/search">Search</RouterLink>
        <RouterLink to="/myset">My Set</RouterLink>
        <RouterLink to="/rating">Ratings</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>
    
    <main>
      <img alt="Vue logo" src="../assets/logo.png">
      <RouterView v-if="user" :user="user"/>
    
      <Auth v-else
        :onSignUp="handleSignUp"
        :onSignIn="handleSignIn"/>
    </main>
  </div>
</template>

<script>
import api from '../services/api';
import Auth from './auth/Auth';

export default {
  data() {
    return {
      user: null
    };
  },
  components: {
    Auth
  },
  // created() {
  //   api.test()
  //     .then(result => this.result = result);
  // },
  methods: {
    handleSignUp(profile) {
      return api.signUp(profile)
        .then(user => {
          this.setUser(user);
        });
    },
    handleSignIn(credentials) {
      return api.signIn(credentials)
        .then(user => {
          this.setUser(user);
        });
    },
    setUser(user) {
      this.user = user;
      if(user) {
        api.setToken(user.token);
        window.localStorage.setItem('profile', JSON.stringify(user));
      }
      else {
        api.setToken();
        window.localStorage.removeItem('profile');
      }
    },
    handleLogout() {
      this.setUser(null);
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
header {
  height: 75px;
  background: lightsteelblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header img {
  height: 100%;
}
nav a {
  text-decoration: none;
  color: black;
  margin: 3px;
  padding: 3px;
  border: 1px solid black;
}
main {
  padding: 8px;
}
</style>
  