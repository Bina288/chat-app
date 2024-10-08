<template>
  <div
    class="message"
    :class="{
      'message--sent': !isReceived,
      'message--received': isReceived,
    }"
  >
    <div class="message__content">
      <p class="message__text">{{ message.text }}</p>
      <time class="message__time" :datetime="message.timestamp"
        >{{ formattedTime }}
        <img
          class="message__received-mark-icon"
          :src="markStyle"
          alt="Received message Mark Icon"
        />
      </time>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useFormatTime } from "@/composables/useFormatTime";

const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
  messageIndex: {
    type: Number,
    required: true,
  },
});
const { formatTime } = useFormatTime();

const formattedTime = computed(() => formatTime(props.message.timestamp));
const isReceived = computed(() => props.messageIndex % 2 === 0);
const markStyle = computed(() =>
  props.messageIndex % 2 === 0
    ? new URL("@/components/icons/mark-black-icon.svg", import.meta.url).href
    : new URL("@/components/icons/mark-white-icon.svg", import.meta.url).href
);
</script>

<style lang="scss" scoped>
$time-font-size: 10px;
$text-font-size: 14px;
$border-radius: 18px;
$message-padding: 10px 15px;
$max-width: 60%;
$margin-bottom: 20px;

.message__content {
  display: flex;
  flex-direction: column;
}

.message__time {
  font-size: $time-font-size;
  margin-top: 5px;
}

.message {
  margin-bottom: $margin-bottom;
  padding: $message-padding;
  border-radius: $border-radius;
  max-width: $max-width;
  font-size: $text-font-size;
  display: inline-block;
}

.message--sent {
  background-color: $light-green;
  align-self: flex-end;
  text-align: right;

  .message__time {
    color: white;
  }
}
.message--received {
  background-color: white;
  align-self: flex-start;
  text-align: left;

  .message__time {
    color: black;
    text-align: right;
  }
}
</style>