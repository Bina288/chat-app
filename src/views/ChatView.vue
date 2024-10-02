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
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  height: 100vh;
}
</style>