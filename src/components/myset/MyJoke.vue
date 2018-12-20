<template>
    <section>
        <li>
            {{joke.title}}
            <button @click="handleDelete">Remove from my set</button>
            <button @click="show = true">Edit ✎</button>
        </li>
        <EditMyJoke v-if="show" :onClose="() => show = false"
        :joke="joke"
        :onEdit="onEdit"
        />
    </section>
</template>

<script>
import EditMyJoke from './EditMyJoke';

export default {
  props: {
    joke: Object,
    onDelete: Function,
    onEdit: Function,
    onClose: Function
  },
  data() {
    return {
      show: false
    };
  },
  components: {
    EditMyJoke
  },
  methods: {
    handleDelete() {
      this.onDelete(this.joke.id);
    }
    // handleEdit() {
    //   this.onEdit(this.joke);
    // }
  } 
};
</script>

<style>

</style>
