<template>
  <div class="home">
    <div class="nav">
      <a href="#intro" class="upperNav" @click.prevent="scrollToID('intro')">JL</a>
      <div class="lowerNav">
        <a href="#about-me" @click.prevent="scrollToID('about-me')">About</a>
        <!-- <a href="#experience" @click.prevent="scrollToID('experience')">Experience</a> -->
        <a href="#projects" @click.prevent="scrollToID('projects')">Projects(WIP)</a>
        <a href="#contact-me" @click.prevent="scrollToID('contact-me')">Contact me</a>
      </div>
    </div>
    <Introduction id="intro" />
    <AboutMe id="about-me" />
    <!-- <Experience id="experience"/> -->
    <Projects id="projects" />
    <ContactMe id="contact-me" />
  </div>
</template>

<script>
// @ is an alias to /src
import Introduction from "@/components/Introduction.vue";
import AboutMe from "@/components/AboutMe.vue";
import Experience from "@/components/Experience.vue";
import Projects from "@/components/Projects.vue";
import ContactMe from "@/components/ContactMe.vue";

export default {
  name: "home",
  methods: {
    scrollToID: function(id) {
      const elem = document.getElementById(id);
      elem.scrollIntoView({ behavior: "smooth" });
    }
    // changeClass: function(curr_id, next_id) {
    //   const curr_id_elem = document.getElementById(curr_id);
    //   const next_id_elem = document.getElementById(next_id);
    //   var initialTopOffset = curr_id_elem.offsetTop;

    //   window.scroll(function(event) {
    //     var scroll = window.scrollTop();
    //     // if the top of our browser is inside the section2
    //     if (
    //       scroll + initialTopOffset >= next_id_elem.offsetTop &&
    //       scroll + initialTopOffset <=
    //         next_id_elem.offsetTop + next_id_elem.outerHeight
    //     ) {
    //       curr_id_elem.addClass("current"); // add the class
    //     } else {
    //       curr_id_elem.removeClass("current"); // remove the class
    //     }
    //   });

    //   window.scroll();
    // }
  },
  components: {
    Introduction,
    AboutMe,
    Experience,
    Projects,
    ContactMe
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
    font-weight: 400;
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

      &:active {
        font-weight: bold;
      }
    }

    p {
      margin-top: 0;
    }

    .current {
      font-weight: bold;
      color: #8b0000;
    }
  }
}
</style>
