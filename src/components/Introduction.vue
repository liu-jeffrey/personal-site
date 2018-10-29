<template>
  <div class="intro">
    <particles lineColor="#a54040" />
    <h2 id="whoAmI">
      Hi, my name is <span style="color: #8B0000">Jeffrey</span>.
      <br/>
      I love to develop and design.
      <br/>
      <span style="font-size: 20px">This site is still a work in progress.</span>
    </h2>
    <img src="../assets/logo.png" alt="hi">
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

img {
  position: relative;
  // left: 5vw;
}
</style>
