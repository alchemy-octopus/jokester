<template>
    <section>
        <h3>Joke Joke Joke</h3>
        <MySetList v-if="jokes"
          :jokes="jokes"/>
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
  }
};
</script>

<style>

</style>
