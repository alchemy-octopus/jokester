<template>
    <section>
        <Search :search="search"/>
        <JokesList :jokes="jokes"/>
    </section>

</template>

<script>
import Search from './Search';
import api from '../../services/api';
import JokesList from './JokesList';

export default {
  data() {
    return {
      jokes: null,
      search: decodeURIComponent(this.$route.query.search),
      showModal: false
    };
  },
  components: {
    Search,
    JokesList
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

</style>
