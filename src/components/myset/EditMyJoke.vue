<template>
  <transition name="fade">
    <div class="modal">
      <!-- better to put this outside the form -->
      <button class="close" @click="onClose">X</button>
      <form class="form" @submit.prevent="handleSubmit">
        <h3>Edit Your Joke</h3>
        <textarea rows="5" v-model="editedJoke.title"></textarea>
        <p><button>Update Joke</button></p>
      </form>
    </div>
  </transition>
</template>

<script>

export default {
  props: {
    joke: Object,
    onEdit: Function,
    onClose: Function
  },
  data() {
    const update = this.joke || {};
    return {
      editedJoke: {
        title: update.title || '',
        source: update.source,
        id: update.id
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onEdit(this.joke, this.editedJoke)
        .then(() => {
          this.onClose();
        });
    }
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

.fade-enter-active, .fade-leave-active {
  transition: all 1s;
  background: rgba(214, 93, 177, .75);
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  background: rgba(214, 93, 177, .75);
}

</style>
