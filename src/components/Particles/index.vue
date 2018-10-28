<template>
  <div class="particles" :id="uniqID"></div>
</template>

<script>
import uuid from "uuid/v1";
import defaultConfig from "./config.json";

export default {
  props: {
    uniqID: {
      type: String,
      default: () => `particles-${uuid()}`
    },
    lineColor: String,
    config: Object
  },
  mounted: function() {
    const config = Object.assign(defaultConfig, this.config);
    if (this.lineColor) {
      config.particles.line_linked.color = this.lineColor;
    }

    window.particlesJS(this.uniqID, config);
  }
};
</script>

<style lang="scss" scoped>
.particles {
  background-color: white;
}
</style>
