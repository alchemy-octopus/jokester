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

};
</script>

<style>

</style>
