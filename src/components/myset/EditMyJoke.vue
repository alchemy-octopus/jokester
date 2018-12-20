<template>
    <section>
       <div class="modal">
           <form class="form" @submit.prevent="onEdit(joke)">
               <button class="close" @click="onClose">X</button>
               <h3>Edit Your Joke</h3>
               <label>Joke</label>
               <input v-model="joke.title">
               <button>Update Joke</button>
           </form>
       </div>
    </section>
</template>

<script>
export default {
  props: {
    onEdit: Function,
    onClose: Function,
    joke: Object
  },
  

};
</script>

<style lang="postcss" scoped>
form {
    background: white;
    padding: 30px;
    border: 1px solid black;
    position: relative;
}

.modal {
  position: fixed;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
  z-index: 10;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
} */

input, button {
  margin: 0 5px;
}

input { */
  width: 125px;
  font-size: 1.05em;
 }

</style>
