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
        console.log('profiles is ', profiles);
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


  //need to add methods section with rating function

};
</script>

<style>

</style>

