<template>

  <div v-if="posts.length > 0" class="postList">
    <h4>Список постов</h4>
    <transition-group name="post-list">
    <post-item
      v-for="post in posts"
      :key="post.id"
      @remove="$emit('remove', post)"
      :post="post"
      class="item"
    >
    </post-item>
  </transition-group>
    
  </div>
  <h3 v-else style="color: red; margin-left: 20px">Cписок постов пуст!</h3>
</template>

<script>
import PostItem from "./PostItem.vue";

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style  scoped>
.postList {
  padding: 20px;
  border: 1px solid teal;
}

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.post-list-move {
  transition: transform 0.4s ease-out;
}

</style>