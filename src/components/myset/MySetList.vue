<template>
    <section>
      <audio src="./crowdcheer.mp3" autoplay></audio>

      <ul v-if="jokes">
        <MyJoke v-for="joke in jokes"
            :key="joke.id"
            :joke="joke"
            :onDelete="onDelete"
            :onEdit="onEdit"
            />
      </ul>
    </section>
</template>

<script>
import MyJoke from './MyJoke';

export default {
  props: {
    jokes: Array,
    onDelete: Function,
    onEdit: Function
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
