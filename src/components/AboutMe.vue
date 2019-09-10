<template>
  <div class="biggerContent">
    <div class="content">
      <img src="../assets/me2.jpg" />
      <div class="aboutMe">
        <h1 style="color: #8B0000">Getting to know me.</h1>
        <p>
          I'm an aspiring developer, studying Computer Science and
          Business Administration Double Degree student at the University of
          Waterloo and Wilfrid Laurier University. Outside of school, I enjoy
          connecting with friends, listening to Jazz and Korean R&B, and
          drinking unhealthy amounts of bubble tea.
        </p>
      </div>
    </div>
    <a href="google.com" id="resume">Resume</a>
  </div>
</template>

<script>
export default {
  name: "AboutMe"
};
</script>

<style scoped lang="scss">
.biggerContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.aboutMe {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 5vw;
  width: 40vw;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

p {
  font-size: 1.4em;
  text-align: left;
  margin: 0;
}

#resume {
  border: 0.4vh solid #c04242;
  border-radius: 5px;
  margin: 4vh;
  padding: 1vh 4vh;
  font-family: "montserrat";
  text-decoration: none;
  color: #c04242;
  font-weight: 700;

  &:hover {
    opacity: 0.7;
  }
}

img {
  position: relative;
  border-radius: 50%;
  border: solid;
  border-color: #c04242;
  border-width: 0.6vh;
  height: 30vh;
}
</style>
