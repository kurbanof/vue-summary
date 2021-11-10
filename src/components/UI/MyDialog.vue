<template>
  <div class="dialog" v-if="show" @click="hideDialog" >
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "my-dialog",
  mixins: [
    toggleMixin
  ]
}
</script>

<style >
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog__content {
  margin: auto;
  background: teal;
  min-height: 50px;
  min-width: 500px;
  border-radius: 3px;
  padding: 20px;
}
</style>