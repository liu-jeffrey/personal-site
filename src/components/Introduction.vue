<template>
  <div class="intro">
    <particles lineColor="#a54040"/>
    <h2 id="whoAmI">
      Hi, my name is
      <span style="color: #8B0000">Jeffrey</span>.
      <br>Let's learn something new.
      <br>
      <span style="font-size: 20px">This site is still a work in progress(WIP).</span>
    </h2>
    <!-- <img src="../assets/me2.jpg" alt="hi" height="250"> -->
    <!-- <img src="../assets/logo.png" alt="hi"> -->
  </div>
</template>

<script>
import Particles from "./Particles";

export default {
  name: "Introduction",
  components: { Particles }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.intro {
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

// prettier-ignore
.particles {
  position: absolute;
  left: 100px; right: 100px; top: 100px; bottom: 100px;
  z-index: 0;
}

#whoAmI {
  position: relative;
  // right: 30vh;

  text-align: left;
  font-size: 40px;
  font-weight: 500;
}

// img {
//   position: relative;
//   border-radius: 50%;
//   border: solid;
//   border-color: rgba(169, 169, 169, 0.459);
//   border-width: 5px;
//   left: 3vw;
// }
</style>
