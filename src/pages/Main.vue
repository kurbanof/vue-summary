<template>
  <div>
    <h1 style="margin-bottom: 100px">
      Добро пожаловать на тестовую страницу на Vue 3
    </h1>
    <div class="wrapper">
      <div class="info">
        <img src="@/img/tetris.gif" class="gif" />
        <div class="btn__container">
          <my-button class="btn__link tetris"
            ><a class="info__btn" href="https://kurbanof.github.io/TetrisJS/"
              >TetrisJS</a
            ></my-button
          >
        </div>
      </div>

      <div class="info">
        <img src="@/img/ehya.gif" class="gif" />
        <div class="btn__container">
          <my-button class="btn__link tetris"
            ><a class="info__btn" href="https://kurbanof.github.io/ehya/"
              >ehya</a
            ></my-button
          >
        </div>
      </div>

      
      <div class="info">
        <img src="@/img/tourplan.gif" class="gif" />
        <div class="btn__container">
          <my-button class="btn__link tetris"
            ><a class="info__btn" href="https://kurbanof.github.io/tour-plan/"
              >TourPlan</a
            ></my-button
          >
        </div>
      </div>

      <div class="info">
        <img src="@/img/hips.gif" class="gif" />
        <div class="btn__container">
          <my-button class="btn__link tetris"
            ><a class="info__btn" href="https://kurbanof.github.io/hips/"
              >hips</a
            ></my-button
          >
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  /* flex-wrap: wrap; */
  /* width: 1000px; */
}
.info {
  width: fit-content;
  border: 2px solid teal;
  background-color: teal;
  margin-bottom: 70px;
}
.info__btn {
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 8px 15px;
  border: 2px solid #fff;
  background-color: teal;
  outline: none;
}
.info__btn:hover {
  color: teal;
  background-color: #fff;
  transition: 0.3s;
}
.gif {
  width: 800px;
}
.tetris {
  margin: 8px;
}
</style>
