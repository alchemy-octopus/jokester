<template>
  <section>
    <h1>Meet the Jokester App Team</h1>
    <img src="https://cdn1.iconfinder.com/data/icons/mask/154/joker-mask-face-carnaval-hat-512.png" class="background">
    <div>
      <h2>About Us</h2>
      <p>We are Team Octopus, a small group of up and coming developers at Alchemy
      Code Lab. We built this "Jokester" app in hopes of bringing laughter
      to your day. The jokes are punny, family friendly, and some even make 
      you laugh because they are awful. Please use our app to search for jokes,
      add your own, or make a set list to impress everyone with your wit. 
      </p>
    </div>
    <div>
      <h3>Hans</h3>
      <img src="assets/Hans.jpg" alt="photo-of-Hans" class="pic"/>
    </div>
    <div>
      <h3>Teonna</h3>
      <img src="assets/Teonna.jpg" alt="photo-of-Teonna" class="pic"/>
    </div>
    <div>
      <h3>Jei Shepherd</h3>
      <img src="/Jei.jpg" alt="photo-of-Jei" class="pic"/>
    </div>
    <div>
      <h3>Ivan Poblete</h3>
      <img src="/Ivan.jpg" alt="photo-of-Ivan" class="pic"/>
    </div>
  </section>
</template>

<script>
export default {

};
</script>

<style scoped>
body {
    width: 100vw;
    padding-top: 100px;
    margin-left: 150px;
    margin-right: 150px;
    font-size: 1.5em;
}

/*pics of us*/
.pic {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin-left: 15px;
    margin-right: 15px;
    transition: transform .2s;
}

.pic:hover {
    transform: scale(1.2); 
}

/*background pic*/
.background {
    opacity: .5;
    position: absolute;
    height: auto;
    width: 100vw;
    height: 180vh;
    z-index: -1;
    left: 0px;
}

</style>
