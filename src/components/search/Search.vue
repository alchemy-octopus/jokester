<template>
  <section>
    <div>
      <h2>Search for a Joke</h2>
      <AddJoke v-bind:onAdd="handleAdd"/>
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
      goals: null
    };
  },
  components: {
    JokesList,
    AddJoke
  },
  methods: {
    handleAdd(goal) {
      return api.addGoal(goal)
        .then(saved => {
          this.goals.push(saved);
        });
    }
  }
};
</script>

<style>

</style>
