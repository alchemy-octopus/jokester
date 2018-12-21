<template>
  <section>
    <h3>Search Results:</h3>
    <ul>
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
h3 {
  font: bold;
}
</style>
