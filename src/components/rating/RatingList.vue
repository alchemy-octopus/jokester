<template>
    <section>
        Rating list
        <ul v-if="jokes">
           <Rating v-for="joke in jokes" 
           :key="joke.id"
           :joke="joke"
           />
        </ul>

    <form @submit.prevent="onEdit(selectedUser)">
        <h2>Rate Other User's Jokes</h2>
        <span>Other Sets: </span>
          <select v-if="profiles"
            v-model="selectedUser"
            required
          >
            <option value="-1" disabled>Select a User</option>
            <option v-for="profile in profiles"
              :key="profile.id"
              :value="profile.id"
            >
            {{profile.username}}
            </option>          
          </select>
          <button type="submit">Select</button>
      </form>
    </section>
</template>

<script>
import Rating from './Rating';

export default {
  data() {
    return {
      selectedUser: null
    };
  },
  
  props: {
    jokes: null,
    profiles: Array,
    onEdit: Function
  },
  components: {
    Rating
  }
};
</script>

<style>

</style>
