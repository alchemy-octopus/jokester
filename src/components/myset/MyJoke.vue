<template>
    <section>
        <li class="myJoke">
            <p class=jokeTitle>{{joke.title}}</p>
            <div class="buttons">
              <button @click="handleDelete">Remove</button>
              <button @click="editShow = true">Edit ✎</button>
              <button @click="detailShow = true">Details</button>
            </div>
            <MyJokeDetail 
              v-if="detailShow" 
              :onClose="() => detailShow = false" 
              :joke="joke"
              :onRate="handleRate"
            /> 
        </li>
        <EditMyJoke 
        v-if="editShow" 
        :onClose="() => editShow = false"
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
      detailShow: false,
      editShow: false
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
        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>

<style scoped>
  .myJoke {
    display: flex;
    flex-direction: column;
    background: #FFC75F;
    border-radius: 5px;
  }
  .jokeTitle {
    margin-bottom: 20px;
  }

  button {
    margin: 5px 5px;
    width: 50%;
  }

  .buttons {
    text-align: center;
  }

</style>
