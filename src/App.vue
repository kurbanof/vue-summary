<template>
  <my-navbar/>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style >
* {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  /* background-color: #494949; */
}

.app {
  padding: 20px;
  padding-top: 70px;
}
</style>