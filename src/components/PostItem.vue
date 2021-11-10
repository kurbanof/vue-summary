<template>
  <div class="post">
    <div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong> {{ post.body }}</div>
      <div><strong>Пост</strong> №{{ post.id }}</div>
    </div>
    <div class="btns" style="margin-left: 10px">
      <my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
      <my-button @click="$emit('remove', post)" style="margin-left: -1px">Удалить</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-top: 10px;
  border: 2px solid teal;
}

.btns {
  display: flex;
}
</style>