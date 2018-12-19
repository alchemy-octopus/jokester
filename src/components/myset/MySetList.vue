<template>
    <section>
        <ul v-if="jokes">
            <MyJoke v-for="joke in jokes"
                :key="joke.id"
                :joke="joke"/>
        </ul>
    </section>
</template>

<script>
import MyJoke from './MyJoke';

export default {
  props: {
    jokes: null
  },
  components: {
    MyJoke
  }
};
</script>

<style>

</style>
