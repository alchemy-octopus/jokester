<template>
  <section>
    <li>
      {{joke.joke}}
      <div v-if="buttonShow === true">
        <button @click="handleAdd">Add to My Set</button>
      </div>
      <div v-else>
        <p>Added</p>
      </div>
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
        source: 'search'
      };
      api.addSearchJoke(searchJoke)
        .then(result => {
          console.log('result', result);
        });
    }
  }
};
</script>

<style scoped>
p {
  font-weight: 600;
}
</style>
