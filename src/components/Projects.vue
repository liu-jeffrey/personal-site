<template>
  <div class="content">
    <h1>Projects</h1>
    <div class="projects">
      <div class="showcase" id="hwat-todo">
        <p>THIS SECTION IS STILL UNDER CONSTRUCTION</p>
      </div>
      <div class="showcase" id="hash-puppy">
        <p>GIMME 5</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.projects {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  margin: 5vh;
  text-align: right;
  color: #8b0000;
}

.showcase {
  display: flex;
  height: 50vh;
  width: 30vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 1vw;
  background-color: white;

  transition-property: transform, filter;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  &:hover {
    transform: translateY(-0.6vh);
    cursor: pointer;
    filter: drop-shadow(0 1rem 0.75rem #ff6863);
  }

  filter: drop-shadow(0 0.2rem 0.4rem #ff6863);
}
</style>
