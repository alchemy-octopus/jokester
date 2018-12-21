<template>
    <div>
      <RatingList 
        :onEdit="handleNewList" 
        :jokes="jokes"
        :profiles="profiles"
        />
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
    api.getProfiles()
      .then(profiles => {
        this.profiles = profiles;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleNewList(selectedUser) {
      api.getRateJokes(selectedUser)
        .then(result => {
          this.jokes = result;
        });
    } 
  }
};
</script>

<style>

</style>

