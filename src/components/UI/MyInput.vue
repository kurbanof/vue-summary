<template>
  <input   @input="updateValue" type="text" class="input" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 15px 20px;
  margin-top: 15px;
  border: 1px solid teal;
  outline: none;
}
</style>