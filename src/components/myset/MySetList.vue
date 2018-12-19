<template>
    <section>
        <ul v-if="jokes">
            <MyJoke v-for="joke in jokes"
                :key="joke.id"
                :joke="joke"
                :onDelete="onDelete"/>
        </ul>
    </section>
</template>

<script>
import MyJoke from './MyJoke';

export default {
  props: {
    jokes: Array,
    onDelete: Function
  },
  components: {
    MyJoke
  }
};
</script>

<style>

</style>
