<template>
  <!-- scrollbar customization -->
  <div class="scroll-container" ref="scrollContainer">
    <div class="chat">
      <div class="chat__messages">
        <template v-for="(message, index) in messages" :key="message.id">
          <div v-if="shouldDisplayDate(messages, index)" class="chat__date">
            {{ getDateLabel(message) }}
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
const { scrollContainer } = usePerfectScrollbar();
import { useStore } from "vuex";

const store = useStore();
const chatId = 1;
console.log(store.getters);
const messages = store.getters.getMessagesByChatId(chatId);
function shouldDisplayDate(messages, index) {
  if (index === 0) return true;
  const currentMessage = messages[index];
  const previousMessage = messages[index - 1];

  const currentDate = new Date(currentMessage.timestamp).toDateString();
  const prevDate = new Date(previousMessage.timestamp).toDateString();

  return currentDate !== prevDate;
}

function getDateLabel(message) {
  const currentDate = new Date(message.timestamp);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  if (currentDate.toDateString() === today.toDateString()) {
    return "Сегодня";
  } else if (currentDate.toDateString() === yesterday.toDateString()) {
    return "Вчера";
  } else {
    return currentDate.toLocaleDateString();
  }
}
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
}
</style>