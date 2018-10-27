<template>
  <div class="aboutMe">
    <img src="../assets/logo.png">
    <p>I'm a Computer Science and<br/>
    Business Administration Double Degree<br/>
    student attending the University of Waterloo<br/>
    and Wilfrid Laurier University.
    <br/><br/>
    Currently I'm a Web Developer for the<br/>
    University of Waterloo Habitat for Humanity<br/>
    Campus Chapter.
    </p>    
  </div>
</template>

<script>
export default {
  name: "Introduction"
};
</script>

<style scoped lang="scss">
.aboutMe {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

p {
  font-size: 25px;
}
</style>
