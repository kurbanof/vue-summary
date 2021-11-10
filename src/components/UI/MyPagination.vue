<template>
  <div class="page__wrapper">
    <div
      class="page"
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      :class="{ 'current-page': page === pageNumber }"
      @click="$emit('changeNumber', pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: "my-pagination",
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.page__wrapper {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}

.page {
  border: 1px solid teal;
  padding: 7px;
  cursor: pointer;
}

.page:hover {
  color: #fff;
  background-color: teal;
}

.current-page {
  border: 2px solid teal;
  padding: 6px;
}

</style>