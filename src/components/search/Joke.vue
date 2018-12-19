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
li {
  border: 2px solid black;
  list-style: none;
  padding: 10px;
}
</style>
