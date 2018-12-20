<template>
    <section>
      <img src=" http://mediad.publicbroadcasting.net/p/kmuw/files/styles/small/public/201703/stand-up-comedy.jpg" class="background">
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

<style scoped>
.background {
  opacity: .5;
  width: 100vw;
  position: absolute;
  z-index: -1;

}

</style>
