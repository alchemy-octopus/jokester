<template>
  <section>
    <div>
      <h2>Search for a Joke</h2>
      <JokesList/>
      <Modal/>
    </div>
  </section>
</template>

<script>
import JokesList from './JokesList.vue';
import Modal from '../shared/Modal.vue';

export default {
  components: {
    JokesList,
    Modal
  }
};
</script>

<style>

</style>
