<template>
  <div class="home">
    <div class="nav">
      <h1>JL</h1>
      <div class="lowerNav">
        <p>About</p>
        <p>Experience</p>
        <p>Projects</p>
        <p>Contact me</p>
        </div>
    </div>
    <Introduction/>    
    <AboutMe/>
  </div>
</template>

<script>
// @ is an alias to /src
import Introduction from "@/components/Introduction.vue";
import AboutMe from "@/components/AboutMe.vue";

export default {
  name: "home",
  components: {
    Introduction,
    AboutMe
  }
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  left: 10vh;
  height: 100vh;

  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 5vh;
    font-size: 40px;
    color: #8b0000;
  }

  .lowerNav {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    padding-bottom: 50px;

    p {
      margin-top: 0;
    }
  }
}
</style>
