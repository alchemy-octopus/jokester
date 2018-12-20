<template>
    <section>
        <li :joke="joke">
            {{joke.title}}
            <button @click="handleDelete">Remove from my set</button>
            <button @click="handleEdit">Edit ✎</button>
            <star-rating 
            v-bind:star-size="10"
            v-bind:read-only=true
            >
          </star-rating>
        </li>
    </section>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  props: {
    joke: Object,
    onDelete: Function,
    onEdit: Function
  },
  components: {
    StarRating
  },
  methods: {
    handleDelete() {
      this.onDelete(this.joke.id);
    },
    handleEdit() {
      this.onEdit(this.joke.id);
    }
  
  }
  
    
};
</script>

<style>

</style>
