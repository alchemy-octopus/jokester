<template>
    <div>
        <h2>Rate Other User's Jokes</h2>
        <RatingList :onRate="handleRate" :jokes="jokes"/>


    </div>
</template>

<script>
import api from '../../services/api';
import RatingList from './RatingList'; 

export default {
  data() {
    return {
      jokes: null
    };
  },
  components: {
    RatingList
  },
  created() {
    api.getMyJokes()
      .then(jokes => {
        this.jokes = jokes;
        console.log('joke is', this.jokes);
      })
      .catch(err => {
        this.error = err;
      });
  },

  //need to add methods section with rating function

};
</script>

<style>

</style>
