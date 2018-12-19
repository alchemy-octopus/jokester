<template>
    <section>
        <li :joke="joke">
            {{joke.title}}
            <button @click="handleDelete">Remove from my set</button>
        </li>
    </section>
</template>

<script>

export default {
  props: {
    joke: Object,
    onDelete: Function
  },
  methods: {
    handleDelete() {
      this.onDelete(this.joke.id);
    }
  }
  
    
};
</script>

<style>

</style>
