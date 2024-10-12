<template>
  <article
    class="chat-item"
    :class="{
      'chat-item--active': isCurrentChat,
    }"
  >
    <div class="chat-item__avatar avatar"></div>
    <div class="chat-item__wrapper">
      <header class="chat-item__info">
        <h4 class="chat-item__title">{{ chat.name }}</h4>
        <time
          v-if="messages.length"
          class="chat-item__time grey-text"
          :datetime="lastMessage.timestamp"
          >{{ getDateOrTimeLabel(lastMessage.timestamp) }}</time
        >
      </header>
      <div class="chat-item__content">
        <p v-if="messages.length" class="chat-item__message grey-text">
          {{ lastMessage.text }}
        </p>
        <p v-else class="chat-item__message grey-text">Сообщений пока нет</p>
        <div v-if="unreadCount" class="chat-item__unread-count">
          {{ unreadCount }}
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { useStore } from "vuex";
import { defineProps, computed } from "vue";
import { useFormatTime } from "@/composables/useFormatTime";
const { formatTime } = useFormatTime();

import { useFormatDate } from "@/composables/useFormatDate";
const { getDateLabel } = useFormatDate();

const store = useStore();
const props = defineProps({
  chat: {
    type: Object,
    required: true,
  },
});

const chatId = props.chat.id;
const messages = computed(() => store.getters.getMessagesByChatId(chatId));
const lastMessage = computed(() => {
  return messages.value.length > 0
    ? messages.value[messages.value.length - 1]
    : null;
});

const formattedTime = computed(() => formatTime(lastMessage.value.timestamp));

const formattedDate = computed(() => getDateLabel(lastMessage.value.timestamp));

const unreadCount = computed(() => {
  console.log("computed");
  return messages.value.filter((message) => !message.hasRead).length;
});

const currentChatId = computed(() => store.getters.getCurrentChat);
const isCurrentChat = computed(() => chatId === currentChatId.value);

function getDateOrTimeLabel(timestamp) {
  const dateLabel = getDateLabel(timestamp);

  if (dateLabel === "Сегодня") {
    const currentDate = new Date(timestamp);
    return currentDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return dateLabel;
}
</script>

<style lang="scss" scoped>
.chat-item--active,
.chat-item:hover {
  background-color: $light-grey;
}
.chat-item {
  display: flex;
  gap: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  .chat-item__avatar {
    margin-right: 10px;
  }

  .chat-item__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
    width: 80%;
    flex-shrink: 0;
  }

  .chat-item__info {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .chat-item__title {
    font-weight: 600;
  }

  .chat-item__time {
    font-size: 12px;
    flex-shrink: 0;
  }
  .chat-item__content {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 15px;
  }

  .chat-item__unread-count {
    width: 15px;
    height: 15px;
    background-color: $light-green;
    border-radius: 50%;
    text-align: center;
    color: white;
    font-size: 10px;
  }

  .chat-item__message {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 90%;
  }
}
</style>