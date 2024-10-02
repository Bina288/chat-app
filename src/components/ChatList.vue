<template>
  <div class="chat-list">
    <chat-list-header></chat-list-header>
    <chat-list-items></chat-list-items>
  </div>
</template>

<script setup>
import ChatListHeader from "./ChatListHeader.vue";
import ChatListItems from "./ChatListItems.vue";
</script>

<style lang="scss" scoped>
.chat-list {
  min-width: 70px;
  max-width: 400px;
  transition: width 0.2s ease;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>