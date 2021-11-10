<template>
  <form class="newPost" >
    <h4 style="color: #fff">Создать новый пост</h4>
    <my-input
      v-focus
      type="text"
      placeholder="Название"
      v-model="post.title"
    />
    <my-input
      type="text"
      placeholder="Описание"
      v-model="post.body"
    />
    <my-button class="btn"  @click.prevent="createPost1" >Создать</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createPost1() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    },
  },
};
</script>

<style scoped >

.btn {
  margin-top: 15px;
}

.btn:hover {
  border: 1px solid #fff;
}
</style>