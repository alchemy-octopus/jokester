<template>
  <div id="app">
    <header>
        <img class="logo" src="/logo.png">
      <h1>Welcome to the Jokester App!</h1>
      <span v-if="user">
        Hello {{user.username}}!
      </span>
      <nav v-if="user">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/search">Jokes</RouterLink>
        <RouterLink to="/myset">My Set</RouterLink>
        <RouterLink to="/ratings">Ratings</RouterLink>
        <RouterLink to="/about">About Us</RouterLink>
        <a href="#" @click="handleLogout">Logout</a>
      </nav>
    </header>
    
    <main>
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
  created() {
    const json = window.localStorage.getItem('profile');
    if(json) {
      this.setUser(JSON.parse(json));
    }
  },
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
h1 {
  margin: 10px;
  color: #FF6F91;
}

header {
  /* position: absolute;
  left: 0;
  width: 100vw; */
  height: 90px;
  background:#845EC2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav a {
  text-decoration: none;
  color: #FF9671;
  margin: 3px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 5px;
}
nav a:hover {
  color: lightgrey;
}

.logo {
  margin: 20px;
  width: 120px;
  -webkit-filter: drop-shadow(20px 20px 20px black);
  filter: drop-shadow(10px 10px 10px black);
}

</style>
  