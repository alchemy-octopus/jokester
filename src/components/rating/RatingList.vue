<template>
    <section>
        Rating list
        <ul v-if="jokes">
           <Rating v-for="joke in jokes" 
           :key="joke.id"
           :joke="joke"
           />
        </ul>
    </section>
</template>

<script>
import Rating from './Rating';

export default {
  props: {
    jokes: null
  },
  components: {
    Rating
  }
};
</script>

<style>

</style>
