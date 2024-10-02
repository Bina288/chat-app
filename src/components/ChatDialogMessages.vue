<template>
  <!-- scrollbar customization -->
  <div class="scroll-container" ref="scrollContainer">
    <div class="chat">
      <div class="chat__messages">
        <div class="chat__date">Сегодня</div>
        <app-message></app-message>
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
</script>

<style lang="scss" scoped>
.scroll-container {
  position: relative;
  overflow: hidden;
}
.chat {
  display: flex;
  flex-direction: column;
  background-color: $iceberg-blue;
  padding: 0 25px;

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

  // .chat__input {
  //   display: flex;
  //   padding-bottom: 20px;
  //   justify-content: center;
  //   position: sticky;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  // }
}
</style>