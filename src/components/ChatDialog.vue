<template>
  <article class="chat-dialog">
    <chat-dialog-header></chat-dialog-header>
    <chat-dialog-messages></chat-dialog-messages>
  </article>
</template>

<script setup>
import ChatDialogHeader from "./ChatDialogHeader.vue";
import ChatDialogMessages from "./ChatDialogMessages.vue";
</script>

<style lang="scss" scoped>
.chat-dialog {
  display: flex;
  flex-direction: column;
}
</style>