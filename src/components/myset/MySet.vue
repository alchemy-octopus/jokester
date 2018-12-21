<template>
    <section>
        <span class="mySet"><h2>My Set List</h2></span>
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
    handleEdit(old, joke){
      const index = this.jokes.indexOf(old);
      return api.editMyJoke(joke)
        .then(edited => {
          this.jokes.splice(index, 1, edited);
        });
    }
  }
};
</script>

<style scoped>
  .mySet {
    text-align: center;
  }
</style>
