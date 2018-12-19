<template>
  <ul v-if="jokes">
    <Joke v-for="joke in jokes"
    :key="joke.id"
    :joke="joke"
    :onEdit="onEdit"/>
  </ul>
</template>

<script>
import Joke from './Joke.vue';

export default {
  props: {
    jokes: null,
    onEdit: Function
  },
  components: {
    Joke
  }
};
</script>

<style scoped>
    ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 2px orangered;
  }
</style>