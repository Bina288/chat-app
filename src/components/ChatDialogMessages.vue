<template>
  <!-- scrollbar customization -->
  <div class="scroll-container" ref="scrollContainer">
    <div class="chat">
      <div class="chat__messages">
        <div v-if="messages.length < 1" class="chat__empty">
          Сообщений пока нет
        </div>
        <template v-for="(message, index) in messages" :key="message.id">
          <div v-if="shouldDisplayDate(messages, index)" class="chat__date">
            {{ getDateLabel(message.timestamp) }}
          </div>
          <app-message :message="message" :messageIndex="index"></app-message>
        </template>
      </div>
      <app-chat-input class="chat__input"></app-chat-input>
    </div>
  </div>
</template>

<script setup>
import AppMessage from "@/components/UI/AppMessage.vue";
import AppChatInput from "./UI/AppMessageInput.vue";
import { usePerfectScrollbar } from "@/composables/usePerfectScrollbar";
import { useStore } from "vuex";
import { computed } from "vue";

import { useFormatDate } from "@/composables/useFormatDate";
const { shouldDisplayDate, getDateLabel } = useFormatDate();
const { scrollContainer } = usePerfectScrollbar();

const store = useStore();
const chatId = computed(() => store.getters.getCurrentChat);
const messages = computed(() =>
  store.getters.getMessagesByChatId(chatId.value)
);
</script>

<style lang="scss" scoped>
.scroll-container {
  position: relative;
  overflow: hidden;
  height: 100hv;
}
.chat {
  display: flex;
  flex-direction: column;
  background-color: $iceberg-blue;
  padding: 0 25px;
  min-height: 100vh;
  padding-top: 10px;

  .chat__messages {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .chat__date {
    align-self: center;
    padding: 8px;
    color: #f0f0f0;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .chat__empty {
    align-self: center;
    padding: 8px;
    color: #f0f0f0;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    font-size: 14px;
    margin-bottom: 80px;
  }
}
</style>