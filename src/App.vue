<template>
  <LoginPanel></LoginPanel>
<div class="toasts">
  <TheToast v-for="(toast,i) in toasts" :key="i" :toastType="toast.type" :message="toast.message">

  </TheToast>
</div>
</template>

<script>
import LoginPanel from "./components/LoginPanel.vue";
import TheToast from "./components/TheToast.vue";
export default {
  data: () => ({
    toasts: [
      // {
      //   type: "Success",
      //   message: "Done Successfully!"
      // },
      // {
      //   type: "Error",
      //   message: "Something went wrong!"
      // }
    ]
  }),
  mounted() {
    this.$eventBus.on("toast", (data) => {
      this.toasts.push(data)
    });
  },
  components: {
    LoginPanel,
    TheToast
  }
}
</script>

<style>
.toasts {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9999999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow-x: hidden;
}
</style>