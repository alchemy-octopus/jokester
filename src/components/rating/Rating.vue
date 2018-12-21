<template>
    <section>
        <li>
          <div class="rating">
            <star-rating 
             :star-size="25"
             inactive-color="#DDD"
             active-color="#FF6F91"
             border-color="#000"
             :border-width="1"
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

<style scoped>
  .rating {
    margin-bottom: 10px;
  }

  li {
    background: #FFC75F;
    border-radius: 5px;
  }

</style>
