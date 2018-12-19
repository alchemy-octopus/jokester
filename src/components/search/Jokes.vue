<template>
    <section>
      <div>
      </div>
      <h1>This is a heading</h1>
        <Search :search="search"/>
        <button @click="show = true">Add A Joke</button>
        <AddJoke :onAdd="handleAdd" v-if="show" :onClose="() => show = false"/>
        <JokesList/>
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
      jokes: [], // needs to be null when getJokes() is here
      search: decodeURIComponent(this.$route.query.search),
      showModal: false,
      show: false
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
          
      this.search + decodeURIComponent(newSearch);
      this.searchJokes();
    }
  },
  methods: {
    handleSearch() {
      this.searchJokes();
    },
    handleAdd(joke) {
      console.log('joke is ', joke);
      return api.addJoke(joke)
        .then(saved => {
          console.log('this.jokes is ', this.jokes);
          this.jokes.push(saved);
        });
    },
    searchJokes() {
      if(!this.search) return;
      api.getJokes(this.search)
        .then(response => {
          this.jokes = response.jokes;
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
