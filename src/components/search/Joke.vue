<template>
  <section>
    <li>
      {{joke.joke}}
      <button @click="handleAdd">Add to My Set</button>
    </li>
  </section>
</template>

<script>
import api from '../../services/api';
export default {
  props: {
    joke: Object
  },
  methods: {
    handleAdd() {
      let searchJoke = {
        title: this.joke.joke,
        source: 'search'
      };
      api.addSearchJoke(searchJoke)
        .then(result => {
          console.log('result', result);
        });
    }
  }
};
</script>

<style>

</style>
