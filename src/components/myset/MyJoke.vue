<template>
    <section>
        <li :joke="joke">
            {{joke.title}}
        </li>
    </section>
</template>

<script>

export default {
  props: {
    joke: Object
  }
    
};
</script>

<style>

</style>
