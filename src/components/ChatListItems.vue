<template>
  <div class="chat__items">
    <app-chat-item></app-chat-item>
  </div>
</template> 

<script setup>
import AppChatItem from "./UI/AppChatItem.vue";
</script>

<style lang="scss" scoped>
.chat__items {
  display: flex;
  flex-direction: column;
}
</style>
  