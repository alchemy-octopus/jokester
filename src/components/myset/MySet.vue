<template>
    <section>
        <h3>Joke Joke Joke</h3>
        <MySetList v-if="jokes"
          :jokes="jokes"
          :onDelete="handleDelete"
          :onEdit="handleEdit"
          />
        
    </section>
</template>

<script>
import api from '../../services/api';
import MySetList from './MySetList';

export default {
  data() {
    return {
      jokes: null
    };
  },
  components: {
    MySetList
  },
  created() {
    api.getMyJokes()
      .then(jokes => {
        this.jokes = jokes;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleDelete(id){
      api.deleteMyJoke(id)
        .then(() => {
          this.jokes = this.jokes.filter(joke => {
            return joke.id !== id;
          });
        });   
    },
    handleEdit(joke){
      api.editMyJoke(joke)
        .then(edited => {
          this.joke = edited;
        });
    }
  }
};
</script>

<style scoped>
/* MySetList {
  z-index: -1;
} */
</style>
