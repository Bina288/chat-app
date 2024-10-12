<template>
  <article class="chat-dialog">
    <chat-dialog-header v-if="chatId !== null"></chat-dialog-header>
    <chat-dialog-messages></chat-dialog-messages>
  </article>
</template>

<script setup>
import ChatDialogHeader from "./ChatDialogHeader.vue";
import ChatDialogMessages from "./ChatDialogMessages.vue";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const chatId = computed(() => store.getters.getCurrentChatId);
</script>

<style lang="scss" scoped>
.chat-dialog {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
</style>