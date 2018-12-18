<template>
  <section>
    <div>
      <h2>Search for a Joke</h2>
      <button @click="show = true">Add A Joke</button>
      <AddJoke :onAdd="handleAdd" v-if="show" :onClose="() => show = false"/>
      <JokesList/>
      <p>This will be a list of jokes</p>
    </div>
  </section>
</template>

<script>
import api from '../../services/api';
import JokesList from './JokesList.vue';
import AddJoke from './AddJoke.vue';

export default {
  data() {
    return {
      jokes: [], //needs to be null when getJokes() is here
      show: false
    };
  },
  components: {
    JokesList,
    AddJoke
  },
  methods: {
    handleAdd(joke) {
      console.log('joke is ', joke);
      return api.addJoke(joke)
        .then(saved => {
          console.log('this.jokes is ', this.jokes);
          this.jokes.push(saved);
        });
    }
  }
};
</script>

<style>

</style>
