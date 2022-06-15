<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
*,
** {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;

  /* CUSTOM STYLE */
  background: cornsilk;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: #000;
    font-size: 1.2em;
    padding: 0.5em 1em;
    margin: 0.5em;
  }
}
</style>
