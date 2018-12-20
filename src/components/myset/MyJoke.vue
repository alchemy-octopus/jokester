<template>
    <section>
        <li :joke="joke">
            {{joke.title}}
            <button @click="handleDelete">Remove from my set</button>
            <button @click="handleEdit">Edit ✎</button>
        </li>
    </section>
</template>

<script>

export default {
  props: {
    joke: Object,
    onDelete: Function,
    onEdit: Function
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
