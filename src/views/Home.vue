<template>
  <div class="home">
    <div class="nav">
      <a href="#intro" class="upperNav" @click.prevent="scrollToID('intro')">JL</a>
      <div class="lowerNav">
        <a href="#about-me" @click.prevent="scrollToID('about-me')">About</a>
        <a href="#experience" @click.prevent="scrollToID('experience')">Experience</a>
        <p>Projects</p>
        <p>Contact me</p>
        </div>
    </div>
    <Introduction id="intro"/>
    <AboutMe id="about-me"/>
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
  methods: {
    scrollToID: function(id) {
      const elem = document.getElementById(id);
      elem.scrollIntoView({ behavior: "smooth" });
    }
  },
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
  top: 0;
  bottom: 0;
  z-index: 2;
  backface-visibility: hidden;

  display: flex;
  flex-direction: column;

  .upperNav {
    margin-top: 5vh;
    font-size: 40px;
    font-weight: bold;
    text-decoration: none;

    color: #8b0000;
    transition: color 150ms ease-in-out;

    &:hover {
      color: #c04242;
    }
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
      text-decoration: none;

      color: black;
      transition: opacity 150ms ease-in-out;

      &:hover {
        opacity: 0.75;
      }
    }

    p {
      margin-top: 0;
    }
  }
}
</style>
