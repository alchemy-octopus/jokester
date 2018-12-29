 <template>
  <section>
    <h2>How to use our App</h2>
      <div class="intro">
        <p>From this page you can select "Jokes" to search through our library
         of jokes or you can add your own.</p>
        <p>Go to "My Set" to see the jokes that you added.</p>
        <P>In "Ratings" you can rate other users jokes.</p>
      </div>
  </section>
</template>

<script>
export default {};

</script>

<style scoped>
img {
  width: 100vw;
}

h2 {
  margin: 30px 0;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

div {
  padding: 20px;
  border: 1px solid black;
}

.intro {
  background: white;
  border-radius: 5px;
}

</style>