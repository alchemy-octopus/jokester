<template>
  <transition name="fade">
    <div class="modal">
      <div class="display">
        <button class="close" @click="onClose">X</button>
        <p class="jokeTitle">{{joke.title}}</p>
        <hr width="50%">
        <div v-if="rating">
          <star-rating 
            v-model="rating"
            :star-size="20"
            :read-only=true
            inactive-color="#DDD"
            active-color="#FF6F91"
            border-color="#000"
            :border-width="1"
            >
          </star-rating>
        </div>
        <div class="rated" v-else >(Not yet rated)</div>
        <p class="source">{{joke.source}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
import StarRating from 'vue-star-rating';
import api from '../../services/api';

export default {
  data() {
    return {
      rating: null
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
  background-color: rgba(214, 93, 177, .75);
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
  height: auto;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input, button {
  margin: 0 5px;
}

input {
  width: 125px;
  font-size: 1.05em;
}
.jokeTitle {
  padding: 20px 10px;
  margin: 20px;
}

.rated {
  font-size: .75em;
}

.source {
  background: #FFC75F;
  border: 2px solid black;
  padding: 5px;
  font-size: .9em;
  border-radius: 5px;
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s;
  background: rgba(214, 93, 177, .75);
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  background: rgba(214, 93, 177, .75);
}

</style>


