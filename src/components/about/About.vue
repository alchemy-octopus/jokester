<template>
  <section>
    <h1>Meet the Jokester App Team</h1>
    <img src="https://cdn1.iconfinder.com/data/icons/mask/154/joker-mask-face-carnaval-hat-512.png" class="background">
    <div id ="body">
      <h2>About Us</h2>
      <p>We are Team Octopus, a small group of up and coming developers at Alchemy
      Code Lab. We built this "Jokester" app in hopes of bringing laughter into your day!
      </p>
    </div>
    
    <div id="us">
    <div>
      <h3>Hans Janowitz</h3>
      <img src="/Hans.jpg" alt="photo-of-Hans" class="pic"/>
      <a href="https://github.com/PDXCrow">Hans's GitHub</a>
      <p>Hans works at a creative agency in Portland, OR. He enjoys spending
        time with his family and cycling in the area.
      </p>
    </div>
    <div>
      <h3>Teonna Zaragoza</h3>
      <img src="/Teonna.jpg" alt="photo-of-Teonna" class="pic"/>
      <a href="https://github.com/tmzaragoza">Teonna's GitHub</a>
      <p>Teonna was previously a nurse. She enjoys the great outdoors
        and spending time with her cats.
      </p>
    </div>
    <div>
      <h3>Jei Shepherd</h3>
      <img src="/Jei.jpg" alt="photo-of-Jei" class="pic"/>
      <a href="https://github.com/JeiWolfei">Jei's GitHub</a>
      <p>Jei spent over twenty years as a teacher and social worker and is
        excited about a new career in technology.
      </p>
    </div>
    <div>
      <h3>Ivan Poblete</h3>
      <img src="/Ivan.jpg" alt="photo-of-Ivan" class="pic"/>
      <a href="https://github.com/ipoblete">Ivan's GitHub</a>
      <p>Ivan spent over a decade in the automotive industry.
        He loves spending time with his family. He also loves
        camping, beer, and hiking.
      </p>
    </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.us {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-column-gap: 35px;
  grid-row-gap: 15px;
  list-style-type: none;
  padding: 0;
}
.body {
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
