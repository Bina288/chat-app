<template>
  <div class="chat-container">
    <chat-list></chat-list>
    <chat-dialog></chat-dialog>
  </div>
</template>

<script setup>
import ChatDialog from "@/components/ChatDialog.vue";
import ChatList from "@/components/ChatList.vue";
</script>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  background-color: white;
  height: 100vh;
}
</style>