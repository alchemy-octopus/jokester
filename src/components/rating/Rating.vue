<template>
    <section>
        <h3>Ratings Page</h3>
        <RatingList/>
    </section>
</template>

<script>
import api from '../../services/api';
import RatingList from './RatingList';

export default {
  data() {
    return {
      ratings: null  
    };
  },
  components: {
    RatingList
  },
  created() {
    api.getRatings()
      .then(ratings => {
        this.ratings = ratings;
      });
  }
};
</script>

<style>

</style>
