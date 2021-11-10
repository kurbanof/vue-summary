<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  padding: 8px 15px;
  border: 1px solid teal;
  color: teal;
  background-color: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  color: #fff;
  background-color: teal;
}
.btn__link {
  padding: 0;
  /* border: none; */
}
</style>