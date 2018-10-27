<template>
  <div class="home">
    <div class="nav">
      <a href="#intro" id=upperNav>JL</a>
      <div class="lowerNav">
        <a href="#aboutMe">About</a>
        <a href="#experience">Experience</a>
        <p>Projects</p>
        <p>Contact me</p>
        </div>
    </div>
    <Introduction id="intro"/>
    <AboutMe id="aboutMe"/>
    <Experience id="experience"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Introduction from "@/components/Introduction.vue";
import AboutMe from "@/components/AboutMe.vue";
import Experience from "@/components/Experience.vue";

export default {
  name: "home",
  components: {
    Introduction,
    AboutMe,
    Experience
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

  #upperNav {
    margin-top: 5vh;
    font-size: 40px;
    font-weight: bold;
    color: #8b0000;
    text-decoration: none;
  }

  .lowerNav {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    padding-bottom: 50px;

    a,
    a:link,
    a:visited {
      margin-bottom: 16px;
      color: black;
      text-decoration: none;
    }

    p {
      margin-top: 0;
    }
  }
}
</style>
