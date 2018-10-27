<template>
  <div class="experience">
   
    <img src="../assets/stuco-logo.png" height="250" width="250" id="stuco">   
     <img src="../assets/fgf-logo.png" height="250" width="250" id="fgf">
    <img src="../assets/h4h-logo.png" height="250" width="250" id="h4h">     
  </div>
</template>

<script>
export default {
  name: "Experience"
};
</script>

<style scoped lang="scss">
.experience {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

#stuco {
  position: relative;
  right: 2vw;
  box-shadow: 4px 4px 5px 1px grey;
}

#fgf {
  box-shadow: 2px 4px 5px 1px grey, -2px 4px 5px 1px grey;
}

#h4h {
  position: relative;
  left: 2vw;
  box-shadow: -4px 4px 5px 1px grey;
}
</style>
