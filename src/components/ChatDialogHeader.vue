<template>
  <header class="chat-header">
    <div class="chat-header__info">
      <div class="chat-avatar avatar"></div>
      <div class="chat-header__text-info">
        <h4 class="chat-header__chat-name">Чат 1</h4>
        <p class="chat-header__last-visit grey-text">в сети 5 мин назад</p>
      </div>
    </div>
    <div class="chat-actions">
      <button>
        <img
          class="search-icon icon"
          src=".\icons\search-icon.svg"
          alt="Search Icon"
        />
      </button>
      <button>
        <img
          class="call-icon icon"
          src=".\icons\call-icon.svg"
          alt="Call Icon"
        />
      </button>
      <button>
        <img
          class="more-icon icon"
          src=".\icons\more-icon.svg"
          alt="More Icon"
        />
      </button>
    </div>
  </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.chat-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;

  .chat-header__info {
    display: flex;
    flex-direction: row;
    .chat-avatar {
      margin-right: 10px;
    }
    .chat-header__text-info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .chat-header__chat-name {
        font-weight: 600;
      }
    }
  }
  .chat-actions {
    display: flex;
    gap: 15px;
    margin-right: 25px;
  }
}
</style>