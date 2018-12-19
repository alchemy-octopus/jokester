<template>
  <section class="photos">
    <h1>Meet the Jokester App Team</h1>
    <img src="">
    <div>
      <h3>About Us</h3>
      <p>We are Team Octopus, a small group of up and coming developers at Alchemy
      Code Lab. We built this "Jokester" app in hopes of bringing laughter
      to your day. The jokes are punny, family friendly, and some even make 
      you laugh because they are awful. Please use our app to search for jokes,
      you can add your own, and make a set list to impress everyone with your wit. 
      </p>
    </div>
    <div>
      <p>Hans</p>
    </div>
    <div>
      <p>Teonna</p>
    </div>
    <div id="jei">
      <p class="names">Jei Shepherd</p>
      <img src="images/Jei.jpeg" alt="photo-of-Jei" class="pic"/>
    </div>
    <div id="ivan">
      <p class="names">Ivan Poblete</p>
      <img src="images/Ivan.jpeg" alt="photo-of-Ivan" class="pic"/>
    </div>
  </section>
</template>

<script>
export default {

};
</script>

<style>
body {
    width: 100vw;
    padding-top: 100px;
    margin-left: 150px;
    margin-right: 150px;
    font-size: 1.5em;
}

.photos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center; 
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
.img {
    opacity: 0.2;
    position: absolute;
    height: auto;
    width: 100vw;
    height: 180vh;
    z-index: -1;
    left: 0px;
}

.names {
    text-align: center;
    font-size: 1.3em;
}

</style>
