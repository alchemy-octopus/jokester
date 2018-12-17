<template>
  <section>
    <div>
      <h2>Search for a Joke</h2>
      <JokesList/>
    </div>
  </section>
</template>

<script>
import JokesList from './JokesList.vue';

export default {
  components: {
    JokesList
  }
};
</script>

<style>

</style>
