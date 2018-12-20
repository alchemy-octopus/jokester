<template>
    <section>
        <h3>Joke Joke Joke</h3>
        <MySetList v-if="jokes"
          :jokes="jokes"
          :onDelete="handleDelete"
          :onEdit="handleEdit"/>
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
    handleEdit(id){
      api.editMyJoke(id)
        .then(edited => {
          this.joke.id = edited;
        });

    }
  }
};
</script>

<style>

</style>
