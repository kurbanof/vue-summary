import axios from "axios";
export default {
  state() {
    return {
      posts: [],
      isPostsLoading: false,
      selectedSort: "",
      searhQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
    }
  },
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
      );
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searhQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    },
    setPage(state, page) {
      state.page = page
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages
    },
    setSearhQuery(state, searhQuery) {
      state.searhQuery = searhQuery
    },

  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit('setLoading', true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit('setPosts', response.data);
        commit('setTotalPages', Math.ceil(
          response.headers["x-total-count"] / state.limit)
        );
      } catch (error) {
        alert("Ошибка в загрузке данных");
        // console.log(error);
      } finally {
        commit('setLoading', false)
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        commit('setPage', state.page + 1);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit('setTotalPages', Math.ceil(
          response.headers["x-total-count"] / state.limit)
        );
        commit('setPosts', [...state.posts, ...response.data]);
      } catch (error) {
        console.log(error);
        alert("Ошибка в загрузке данных");
      }
    },
  },
  namespaced: true,
}
