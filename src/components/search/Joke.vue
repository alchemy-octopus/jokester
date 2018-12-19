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
      this.addSearchJoke(this.joke)
        .the(() => {
          this.joke = { };
        });
    }
  }
};
</script>

<style>

</style>
