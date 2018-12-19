<template>
    <section>
        <li :joke="joke">
            {{joke.title}}
            <button @click="handleDelete">Remove from my set</button>
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
    handleDelete() {
      api.deleteMyJoke(this.joke.id)
        .then(() => [
          this.$router.push('/jokes')
        ]);
    }
  }
    
};
</script>

<style>

</style>
