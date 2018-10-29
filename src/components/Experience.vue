<template>
  <div class="experience">
    <div
      class="modal" :class="{ visible: modalVisible }"
      @click="hideModal"
      ref="modal"
    >
      <div class="card">
        <div class="content">
          <h2>{{ cardTitle }}</h2>
          <p>{{ cardBody }}</p>
        </div>
      </div>
    </div>
    <img
      src="../assets/stuco-logo.png"
      height="250" width="250" id="stuco"
      @click="showModal('stuco')"
    >
    <img
      src="../assets/fgf-logo.png"
      height="250" width="250" id="fgf"
      @click="showModal('fgf')"
    >
    <img
      src="../assets/h4h-logo.png"
      height="250" width="250" id="h4h"
      @click="showModal('h4h')"
    >
    </div>
</template>

<script>
export default {
  name: "Experience",
  data: function() {
    return {
      modalVisible: false,
      cardTitle: "",
      cardBody: ""
    };
  },
  methods: {
    showModal: function(name) {
      switch (name) {
        case "stuco":
          this.cardTitle = "St.Robert CHS Student Council";
          break;
        case "fgf":
          this.cardTitle = "FGF Brands";
          break;
        case "h4h":
          this.cardTitle = "Habitat For Humanity - UW Campus Chapter";
          break;
      }

      this.modalVisible = true;
    },
    hideModal: function(event) {
      if (event.toElement === this.$refs.modal) {
        this.modalVisible = false;
      }
    }
  }
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

.modal {
  visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;

  transition: all 250ms ease-in-out;

  .card {
    height: 0px;
    width: 500px;
    border-radius: 15px;
    background-color: white;

    padding: 15px;
    cursor: default;

    opacity: 0;
    transition: all 350ms ease-in-out;

    .content {
      opacity: 0;
      visibility: hidden;
      transition: all 200ms 250ms ease-in-out;
    }
  }

  &.visible {
    visibility: visible;
    background-color: rgba(95, 95, 95, 0.527);
    cursor: pointer;

    .card {
      opacity: 1;
      height: 500px;

      .content {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  // prettier-ignore
  &:not(.visible) {
    transition-delay: 200ms;

    .card {
      transition-delay: 100ms;

      // prettier-ignore
      .content { transition-delay: 0s; }
    }
  }
}
</style>
