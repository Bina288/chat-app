<template>
  <div class="search-bar">
    <button class="menu-btn">
      <img class="icon" src="./icons/menu-icon.svg" alt="Chats Menu" />
    </button>
    <div class="search-form" v-show="!isCollapsed">
      <button class="search-btn">
        <img
          class="search-icon icon"
          src="./icons/search-icon.svg"
          alt="Search"
        />
      </button>
      <input class="search-input" type="text" placeholder="Поиск" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isCollapsed: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  justify-content: space-between;
  gap: 20px;
}

.menu-btn {
  margin-left: 10px;
  background: none;
  border: none;
  cursor: pointer;
}

.search-form {
  display: flex;
  justify-content: center;
  flex-grow: 1;

  .search-btn {
    border-radius: 20px 0 0 20px;
    background-color: $light-grey;
    padding: 10px;
    border: none;
    display: flex;
    align-items: center;
  }

  .search-input {
    border-radius: 0 20px 20px 0;
    border: 1px solid $light-grey;
    background-color: $light-grey;
    padding: 10px;
    width: 100%;
  }
}
</style>