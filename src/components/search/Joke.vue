<template>
  <section>
    <li>
      {{joke.joke}}
    </li>
  </section>
</template>

<script>
export default {
  props: {
    joke: Object
  }
};
</script>

<style>

</style>
