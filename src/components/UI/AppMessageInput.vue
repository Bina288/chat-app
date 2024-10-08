<template>
  <div class="input-container">
    <button class="input-container__emoji-btn">
      <img
        class="input-container__emoji-icon"
        src="..\icons\emoji-icon.svg"
        alt="Emoji Icon"
      />
    </button>
    <input
      class="input-container__input"
      type="text"
      placeholder="Напишите сообщение"
    />
    <button class="input-container__send-btn">
      <img
        class="input-container__send-msg-icon"
        src="..\icons\send-msg-icon.svg"
        alt="Send message Button Icon"
      />
    </button>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  padding-top: 10px;
  padding-bottom: 20px;
  justify-content: center;
  position: sticky;
  bottom: 0;
}

.input-container__input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid white;
}

.input-container__send-btn,
.input-container__emoji-btn {
  padding: 15px 20px;
}

.input-container__send-btn {
  border-radius: 0 10px 10px 0;
}

.input-container__emoji-btn {
  border-radius: 10px 0 0 10px;
}
</style>