<template>
  <div class="navbar">
    <my-button class="btn" @click="$router.push('/')">Главная</my-button>
    <div class="btns">
      <my-button class="btn" @click="$router.push('/posts')">Посты</my-button>
      <my-button class="btn" 
      @click="$router.push('/about')">О сайте</my-button>
      <my-button
      class="btn"
      @click="$router.push('/postsX')">PostX</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from './MyButton.vue';
export default {
  components: { MyButton },
  name: "my-navbar",
};
</script>

<style scoped>
.navbar {
  /* height: 70px; */
  padding: 15px 20px;
  background-color: teal;
  box-shadow: 0px 10px 18px rgb(0 0 0 / 15%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}



.btn {
  margin-left: 4px;
  border: 2px solid #fff;
  background-color: teal;
  color: #fff;
}

.btn:hover {
  background-color: #fff;
  color: teal;
}
.navbar__item {
  font-size: 30px;
  color: #fff;
  cursor: pointer;
}
</style>