<template>
  <div class="contact">
    <h3>Let's get in touch</h3>
    <div class="links">
      <a href="mailto: jeffrey.liu@uwaterloo.ca">
        <img src="../assets/email_logo.png" height="50" width="50">
      </a>
      <a href="https://www.linkedin.com/in/liu-jeffrey/" target="_blank">
        <img src="../assets/linkedin_logo.png" height="50" width="50">
      </a>
      <a href="http://github.com/liu-jeffrey" target="_blank">
        <img src="../assets/github_logo.png" height="50" width="50">
      </a>
    </div>
  </div>
</template>


<style scoped lang="scss">
.contact {
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

a {
  margin: 0 2vh;
}
</style>
