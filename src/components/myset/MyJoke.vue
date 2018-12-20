<template>
    <section>
        <li :joke="joke">
            {{joke.title}}
            <button @click="handleDelete">Remove from my set</button>
            <button @click="handleEdit">Edit ✎</button>
            <button @click="show = true">Details</button>
            <MyJokeDetail 
              v-if="show" 
              :onClose="() => show = false" 
              :joke="joke"
              :onRate="handleRate"
            /> 
        </li>
    </section>
</template>

<script>
import MyJokeDetail from './MyJokeDetail';
import api from '../../services/api';

export default {
  props: {
    joke: Object,
    onDelete: Function,
    onEdit: Function,
    onRate: Function
  },
  components: {
    MyJokeDetail
  },
  methods: {
    handleDelete() {
      this.onDelete(this.joke.id);
    },
    handleEdit() {
      this.onEdit(this.joke.id);
    },
    handleRate() {
      api.getRatings(this.joke.id)
        .then(rating => {
          this.rating = rating;
          console.log('rating is ', rating);
        })
        .catch(err => {
          this.error = err;
        });
    }
  },
  data() {
    return {
      show: false
    };
  }
    
};
</script>

<style>

</style>
