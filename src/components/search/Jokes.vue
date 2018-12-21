<template>
    <section>
        <Search :search="search"/>
        <button @click="show = true">Add A Joke</button>
        <AddJoke :onAdd="handleAdd" v-if="show" :onClose="() => show = false"/>
        <JokesList v-if="jokes" :jokes="jokes"/>
        <p class="errormsg">{{errormsg}}</p>
    </section>
</template>

<script>
import Search from './Search';
import api from '../../services/api';
import JokesList from './JokesList';
import AddJoke from './AddJoke.vue';

export default {
  data() {
    return {
      jokes: [],
      search: decodeURIComponent(this.$route.query.search = ''),
      showModal: false,
      show: false,
      errormsg: ''
    };
  },
  components: {
    Search,
    JokesList,
    AddJoke
  },
  watch: {
    $route(newRoute, oldRoute) {
      const newSearch = newRoute.query.search;
      const oldSearch = oldRoute.query.search;
      if(newSearch === oldSearch) return;
      this.search = decodeURIComponent(newSearch);
      this.searchJokes();
    }
  },
  methods: {
    handleSearch() {
      this.searchJokes();
    },
    handleAdd(joke) {
      return api.addJoke(joke);
    },
    searchJokes() {
      if(!this.search) return;
      api.getJokes(this.search)
        .then(response => {
          this.jokes = response.results;
          if(this.jokes.length <= 0){
            this.errormsg = 'No search results found.';
          }
        });
    }
  }

};
</script>

<style>
  button {
    margin: 20px;
  }
</style>
