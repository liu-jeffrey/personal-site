<template>
  <div class="intro">
    <h2 id="whoAmI">Hi, my name is <span style="color: #8B0000">Jeffrey</span>.
    <br/>I love to develop and design.</h2>
    <img src="../assets/logo.png" alt="hi"> 
  </div>
</template>

<script>
export default {
  name: "Introduction"
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

#whoAmI {
  text-align: left;
  font-size: 40px;
  position: relative;
  right: 5vw;
}

img {
  position: relative;
  left: 5vw;
}
</style>
