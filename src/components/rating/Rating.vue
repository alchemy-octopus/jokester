<template>
    <section>
        <li>
          <div class="rating">
            <star-rating 
             :star-size="25"
              @rating-selected="setRating">
            </star-rating>
          </div>
          {{joke.title}}
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
  .rating {
    margin-bottom: 10px;
  }
</style>
