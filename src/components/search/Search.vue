<template>
  <section>
    <div>
      <h2>Search for a Joke</h2>
      <button @click="getJokes()">Click</button>
      <JokesList/>
      <Modal v-if="showModal" :onClose="() => showModal"/>
    </div>
  </section>
</template>

<script>
import api from '../../services/api';
import JokesList from './JokesList';
import Modal from '../shared/Modal';

export default {
  components: {
    JokesList,
    Modal
  },
  methods: {
    getJokes() {
      api.getJokes('cat')
        .then(response => console.log('joke', response));
    }
  }
};
</script>

<style>

</style>
