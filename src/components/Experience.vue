<template>
  <div class="experience">
    <img
      src="../assets/stuco-logo.png"
      height="250"
      width="250"
      id="stuco"
    >
    <!-- <div class="popover stuco" :class="{ visible: focused === 'stuco' }">
      Hey what's up guys it's Scarce here.
    </div> -->
    <img src="../assets/fgf-logo.png" height="250" width="250" id="fgf">
    <img src="../assets/h4h-logo.png" height="250" width="250" id="h4h">
  </div>
</template>

<script>
export default {
  // name: "Experience",
  // data: function() {
  //   return {
  //     focused: undefined
  //   };
  // }
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

img {
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: scale(1.15);
    cursor: pointer;
  }
}

#stuco,
#h4h {
  position: relative;
  filter: drop-shadow(2px 4px 5px grey) drop-shadow(-2px 4px 5px grey);
}

// prettier-ignore
#stuco { right: 2vw; }
// prettier-ignore
#h4h { left: 2vw; }

#fgf {
  filter: drop-shadow(2px 4px 5px grey) drop-shadow(-2px 4px 5px grey);
}

.popover {
  display: none;
}
</style>
