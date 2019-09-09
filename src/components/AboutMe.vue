<template>
  <div class="aboutMe">
    <h1 style="color: #8B0000">About Me</h1>
    <div class="content">
      <img src="../assets/me2.jpg" height="250">
      <p>Heyo! I'm a third year Computer Science and
        <br>Business Administration Double Degree
        <br>student attending the University of Waterloo
        <br>and Wilfrid Laurier University.
        <br>
        <br>I am interested in software and web development.
        <br>In my free time I enjoy connecting with friends,
        <br>and going to the gym so I can drink more bubble tea.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe"
};
</script>

<style scoped lang="scss">
.aboutMe {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

p {
  font-size: 25px;
  text-align: left;
  margin-left: 5vw;
}

img {
  position: relative;
  border-radius: 50%;
  border: solid;
  // border-color: rgba(169, 169, 169, 0.459);
  border-color: #c04242;
  border-width: 5px;
  // left: 3vw;
}
</style>
