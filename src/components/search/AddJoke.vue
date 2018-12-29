<template>
  <transition name="fade">
    <div class="modal">
    <form class="form" @submit.prevent="handleSubmit">
        <button class="close" @click="onClose">X</button>
        <h3>Add Your Own Joker</h3>
        <p><label>Joke Text:</label></p>
        <textarea rows="5" autofocus v-focus v-model="joke.title" required></textarea>
        <button class="add">Add</button>
    </form>
    </div>
  </transition>
</template>

<script>

function initJoke() {
  return {
    title: '',
    source: 'your creation'
  };
}

export default {
  props: {
    onAdd: Function,
    onClose: Function
  },
  data() {
    return {
      joke: initJoke()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.joke)
        .then(() => {
          this.joke = initJoke();
          this.onClose();
        });
    },
  },
  created() {
    this.documentListener = event => {
      if(event.keyCode === 27) {
        this.onClose();
      }
    };
    document.addEventListener('keyup', this.documentListener);
  },
  destroyed() {
    document.removeEventListener('keyup', this.documentListener);
  }
};
</script>

<style lang="postcss" scoped>

form {
    background: white;
    padding: 30px;
    border: 1px solid black;
    position: relative;
    border-radius: 5px;
    padding: 40px;
}

.modal {
  position: fixed;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(214, 93, 177, .75);
  z-index: 4;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
}

input, button {
  margin: 0 5px;
}

input {
  width: 125px;
  font-size: 1.05em;
}

.add {
  margin-left: 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s;
  background: rgba(214, 93, 177, .75);
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  background: rgba(214, 93, 177, .75);
}

</style>


