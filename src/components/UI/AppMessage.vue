<template>
  <div class="message message--sent">
    <div class="message__content">
      <p class="message__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula
        ac nulla id egestas. Nulla eu sodales odio. Ut vitae eleifend est.
        Integer molestie magna ex, sit amet maximus orci iaculis eu.
      </p>
      <time class="message__time" datetime="2024-09-27T16:14"
        >16:14
        <img
          class="message__received-mark-icon"
          src="..\icons\mark-black-icon.svg"
          alt="Received message Mark Icon"
      /></time>
    </div>
  </div>
  <div class="message message--received">
    <div class="message__content">
      <p class="message__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula
        ac nulla id egestas. Nulla eu sodales odio. Ut vitae eleifend est.
        Integer molestie magna ex, sit amet maximus orci iaculis eu.
      </p>
      <time class="message__time" datetime="2024-09-27T17:14"
        >17:14
        <img
          class="message__received-mark-icon"
          src="..\icons\mark-black-icon.svg"
          alt="Received message Mark Icon"
      /></time>
    </div>
  </div>
  <div class="message message--sent">
    <div class="message__content">
      <p class="message__text">Привет, все работает</p>
      <time class="message__time" datetime="2024-09-27T18:16"
        >18:16
        <img
          class="message__sent-mark-icon"
          src="..\icons\mark-white-icon.svg"
          alt="Send message Mark Icon"
      /></time>
    </div>
  </div>
  <div class="message message--sent">
    <div class="message__content">
      <p class="message__text">
        Скопируй и перешли мне, пожалуйста: Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Morbi vehicula ac nulla id egestas. Nulla
        eu sodales odio. Ut vitae eleifend est. Integer molestie magna ex, sit
        amet maximus orci iaculis eu.
      </p>
      <time class="message__time" datetime="2024-09-27T18:18"
        >18:18
        <img
          class="message__sent-mark-icon"
          src="..\icons\mark-white-icon.svg"
          alt="Send message Mark Icon"
      /></time>
    </div>
  </div>

  <div class="message message--received">
    <div class="message__content">
      <p class="message__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula
        ac nulla id egestas. Nulla eu sodales odio. Ut vitae eleifend est.
        Integer molestie magna ex, sit amet maximus orci iaculis eu.
      </p>
      <time class="message__time" datetime="2024-09-27T19:14"
        >19:14
        <img
          class="message__received-mark-icon"
          src="..\icons\mark-black-icon.svg"
          alt="Received message Mark Icon"
      /></time>
    </div>
  </div>
</template>

<script setup>
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