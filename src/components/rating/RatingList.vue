<template>
    <section>
        <ul v-if="jokes">
           <Rating v-for="joke in jokes"
           :onRate="handleRate" 
           :key="joke.id"
           :joke="joke"
           />
        </ul>

    <form @submit.prevent="onEdit(selectedUser)">
        <h2>Rate Other Jokester's Jokes</h2>
        <label>
        <span>Select a User: </span>
          <select v-if="profiles"
            v-model="selectedUser"
            required
          >
            <option value="-1" disabled selected>Select a User</option>
            <option v-for="profile in profiles"
              :key="profile.id"
              :value="profile.id"
            >
            {{profile.username}}
            </option>          
          </select>
        </label>
          <button type="submit">Select</button>
      </form>
    </section>
</template>

<script>
import api from '../../services/api';
import Rating from './Rating';

export default {
  data() {
    return {
      selectedUser: -1
    };
  },
  props: {
    jokes: null,
    profiles: Array,
    onEdit: Function
  },
  components: {
    Rating
  },
  methods: {
    handleRate(rated) {
      api.addRating(rated);
    } 
  }
};
</script>

<style>


</style>
