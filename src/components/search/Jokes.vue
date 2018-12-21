<template>
  <div>
    <section>
      <div class="add">
        <div>
          <AddJoke :onAdd="handleAdd" v-if="show" :onClose="() => show = false"/>
          <button class="addButton" @click="show = true">Add Your Own Joke</button>
        </div>
        <div class="search">
          <Search :search="search"/>
          <JokesList v-if="jokes" :jokes="jokes"/>
          <p class="errormsg">{{errormsg}}</p>
        </div>
      </div>
    </section>
  </div>
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

<style scoped>
  button {
    margin: 20px;
  }

section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.add {
  border: 1px solid black;
  margin: 30px;
  padding: 40px 100px;
  background: white;
  border-radius: 5px;
  max-width: 1000px;
}

.addButton {
  background: #FFC75F;
  font-size: 1em;
}

</style>
