<template>
  <section>
    <ul>
      <h3>Jokes List</h3>
      <Joke v-for="joke in jokes"
        :key="joke.id"
        :joke="joke"
        />
    </ul>
  </section>  
</template>

<script>
import Joke from './Joke.vue';

export default {
  props: {
    jokes: Array
  },
  components: {
    Joke
  }
};
</script>

<style>
ul {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
}
</style>
