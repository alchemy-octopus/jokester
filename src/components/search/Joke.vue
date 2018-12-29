<template>
  <section>
    <li>
      {{joke.joke}}
      <button v-if="buttonShow === true" class="add-button" @click="handleAdd">Add to My Set</button>
      <button v-else class="disabled" disabled>Added</button>
    </li>
  </section>
</template>

<script>
import api from '../../services/api';
export default {
  props: {
    joke: Object
  },
  data() {
    return {
      buttonShow: true
    };
  },
  methods: {
    handleAdd() {
      this.buttonShow = false;

      let searchJoke = {
        title: this.joke.joke,
        source: 'found with search'
      };
      
      api.addSearchJoke(searchJoke)
        .then(result => {
          this.result = result;
        });
    }
  }
};
</script>

<style scoped>
p {
  font-weight: 600;
}

.add-button {
  margin-top: 10px;
  bottom: 5px;
}

li {
  background: #FFC75F;
  border-radius: 5px;
}

.disabled {
  background: lightgray;
  margin-top: 10px;
  bottom: 5px;
  box-shadow: none;
}

</style>
