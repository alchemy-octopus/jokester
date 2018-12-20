<template>
    <section>
        <li>
            {{joke.title}}
            <button @click="handleDelete">Remove from my set</button>
            <button @click="show = true">Edit ✎</button>
            <button @click="show = true">Details</button>
            <MyJokeDetail 
              v-if="show" 
              :onClose="() => show = false" 
              :joke="joke"
              :onRate="handleRate"
            /> 
        </li>
        <EditMyJoke v-if="show" :onClose="() => show = false"
        :joke="joke"
        :onEdit="onEdit"
        />
    </section>
</template>

<script>
import EditMyJoke from './EditMyJoke';
import MyJokeDetail from './MyJokeDetail';
import api from '../../services/api';

export default {
  props: {
    joke: Object,
    onDelete: Function,
    onEdit: Function,
    onClose: Function,
    onRate: Function
  },
  data() {
    return {
      show: false
    };
  },
  components: {
    EditMyJoke,
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
  }
};
</script>

<style>

</style>
