<template>
  <div >
    <my-input v-model="searhQuery" placeholder="Поиск..."  v-focus/>
    <div class="app__btns">
      <my-button @click="showDialog"> Создать пост </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"></post-form>
    </my-dialog>

    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    ></post-list>
    <div v-else>Идeт загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!-- <my-pagination :totalPages="totalPages" :page="page" @changeNumber="changePage"/> -->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage'
    }),
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
      loadMorePosts: 'post/loadMorePosts'
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    // changePage(pageNumberx) {
    //   this.page = pageNumberx;
    //
    // },
    
  },
  watch: {
    // page() {
    //    this.fetchPosts();
    // }
  },
  mounted() {
    this.fetchPosts();
    
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searhQuery: state => state.post.searhQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
      sortedPosts: 'post/sortedPosts'
    })
  },
};
</script>

<style >




.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

</style>