<template>
  <div>
    <div class="modal" @click="onClose">
      <div class="content" @click.stop="">
        <button class="close" @click="onClose">X</button>
        <form @submit.prevent="onSubmit(joke)">
          <label>
            Joke:
            <textarea name="message" rows="10" cols="30"/>
          </label>
          <button> {{label || 'Add'}} </button>
        </form>   
      </div>   
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onSubmit: Function,
    onClose: Function,
    label: String
  }

};
</script>

<style>
.modal {
  position: fixed;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
  color: black;
  z-index: 1;
}
.content {
  position: relative;
  background: lightgray;
  padding: 40px;
}
.close {
  position: absolute;
  top: 5px;
  right: 5px;
}
img {
  top: 0;
  left: 0;
  width: 150px;
  height: 100%;
}
</style>
