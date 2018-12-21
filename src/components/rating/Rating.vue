<template>
    <section>
        <li>
          {{joke.title}}
          <star-rating 
            :star-size="30"
            @rating-selected="setRating">
          </star-rating>
        </li>
    </section>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  props: {
    joke: null,
    onRate: Function
  },
  components: {
    StarRating
  },
  methods: {
    setRating: function(rating){
      this.rating = rating;
      let rated = {
        rating: rating,
        jokeId: this.joke.id
      };
      this.onRate(rated);
    }
  },
  data() {
    return {
      rating: 0
    };
  }
};
</script>

<style>

</style>
