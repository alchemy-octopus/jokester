<template>
    <section>
        <li>
          {{joke.title}}
          <RateJoke/>
        </li>
    </section>
</template>

<script>
import RateJoke from './RateJoke';

export default {
  props: {
    joke: null,
    onRate: Function
  },
  components: {
    RateJoke
  },
};
</script>

<style>

</style>
