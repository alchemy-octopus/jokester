<template>
    <section>
        <li :joke="joke">
            {{joke.title}}
            <button @click="handleDelete">Remove from my set</button>
            <button @click="handleEdit">Edit ✎</button>
            <button @click="show = true">Details</button>
            <MyJokeDetail :joke="joke" v-if="show" :onClose="() => show = false"/> 
        </li>
    </section>
</template>

<script>
import MyJokeDetail from './MyJokeDetail';


export default {
  props: {
    joke: Object,
    onDelete: Function,
    onEdit: Function
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
