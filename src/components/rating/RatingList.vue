<template>
    <section>
        Rating list
        <ul v-if="jokes">
           <Rating v-for="joke in jokes" 
           :key="joke.id"
           :joke="joke"
           v-bind:onRate="onRate"/>
        </ul>
    </section>
</template>

<script>
import Rating from './Rating';

export default {
  components: {
    Rating
  }
};
</script>

<style>

</style>
