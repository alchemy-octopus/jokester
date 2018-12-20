<template>
    <div class="modal">
        <div class="display">
          <button class="close" @click="onClose">X</button>
          <p>{{joke.title}}</p>
          <star-rating 
            v-model="rating"
            v-bind:star-size="10"
            v-bind:read-only=true
            >
          </star-rating>
          <p>{{joke.source}}</p>
        </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating';
import api from '../../services/api';

export default {
  data() {
    return {
      rating: 0
    };
  },
  props: {
    joke: Object,
    onClose: Function
  },
  components: {
    StarRating
  },
  created() {
    api.getRatings(this.joke.id)
      .then(rating => {
        this.rating = parseInt(rating[0].rating);
        console.log('rating is ', parseInt(rating[0].rating));
      })
      .catch(err => {
        this.error = err;
      });
    this.documentListener = event => {
      if(event.keyCode === 27) {
        this.onClose();
      }
    };
    document.addEventListener('keyup', this.documentListener);
  },
  destroyed() {
    document.removeEventListener('keyup', this.documentListener);
  },
};
</script>

<style lang="postcss" scoped>



.modal {
  position: fixed;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .75);
  z-index: 4;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
}
.display {
  position: relative;
  width: 400px;
  height: 400px;
  background: white;
}

input, button {
  margin: 0 5px;
}

input {
  width: 125px;
  font-size: 1.05em;
}
</style>


