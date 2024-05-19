<template>
  <LoginPanel></LoginPanel>
<div class="toasts">
  <TheToast></TheToast>
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