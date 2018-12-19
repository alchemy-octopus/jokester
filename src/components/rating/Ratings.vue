<template>
    <div>
      <form @submit.prevent="onSubmit(id)">
        <h2>Rate Other User's Jokes</h2>
        <RatingList :onRate="handleRate" :jokes="jokes"/>
        <span>Other Sets: </span>
          <select v-if="profiles"
            v-model="profiles.username"
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
          <button>Select</button>
      </form>
    </div>
</template>

<script>
import api from '../../services/api';
import RatingList from './RatingList'; 

export default {
  data() {
    return {
      jokes: null,
      profiles: null
    };
  },
  components: {
    RatingList
  },
  created() {
    api.getMyJokes()
      .then(jokes => {
        this.jokes = jokes;
      })
      .catch(err => {
        this.error = err;
      });

    api.getProfiles()
      .then(profiles => {
        this.profiles = profiles;
        console.log('profiles is ', profiles);
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleRate() {
      console.log('');
    } 
  }


  //need to add methods section with rating function

};
</script>

<style>

</style>
