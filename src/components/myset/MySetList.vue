<template>
    <section>
        <ul v-if="jokes">
            <MyJoke v-for="joke in jokes"
                :key="joke.id"
                :joke="joke"
                :onDelete="onDelete"
                :onEdit="onEdit"
                />
        </ul>
        
          <!-- :joke="joke"
           -->
        
    </section>
</template>
//  :onClose="() => show = false"
<script>
import MyJoke from './MyJoke';



export default {
  props: {
    jokes: Array,
    onDelete: Function,
    onEdit: Function
  },
  components: {
    MyJoke,
  }
};
</script>

<style>

</style>
