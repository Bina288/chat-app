<template>
  <!-- scrollbar customization -->
  <div class="scroll-container" ref="scrollContainer">
    <div class="chat__items">
      <app-chat-item></app-chat-item>
    </div>
  </div>
</template> 

<script setup>
import AppChatItem from "./UI/AppChatItem.vue";
import { usePerfectScrollbar } from "@/composables/usePerfectScrollbar";

const { scrollContainer } = usePerfectScrollbar();
</script>

<style lang="scss" scoped>
.scroll-container {
  position: relative;
  overflow: hidden;
}
.chat__items {
  display: flex;
  flex-direction: column;
  overflow: auto;
}
</style>
  