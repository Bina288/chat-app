<template>
  <!-- scrollbar customization -->
  <div class="scroll-container" ref="scrollContainer">
    <div v-for="chat in chats" :key="chat.id">
      <app-chat-item :chat="chat" @click="selectChat(chat.id)"></app-chat-item>
    </div>
  </div>
</template> 

<script setup>
import AppChatItem from "./UI/AppChatItem.vue";
import { usePerfectScrollbar } from "@/composables/usePerfectScrollbar";
const { scrollContainer } = usePerfectScrollbar();
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const chats = computed(() => store.getters.getAllChats);

const selectChat = (chatId) => {
  store.dispatch("changeCurrentChat", chatId);
};
</script>

<style lang="scss" scoped>
.scroll-container {
  position: relative;
  overflow: hidden;
}
</style>
  