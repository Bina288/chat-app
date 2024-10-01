<template>
  <div class="search-bar">
    <button class="menu-btn">
      <img class="icon" src="./icons/menu-icon.svg" alt="Chats Menu" />
    </button>
    <div class="search-form">
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
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  align-items: center;
  padding: 10px;
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
    background-color: $light-gray;
    padding: 10px;
    border: none;
    display: flex;
    align-items: center;
  }

  .search-input {
    border-radius: 0 20px 20px 0;
    border: 1px solid $light-gray;
    background-color: $light-gray;
    padding: 10px;
    width: 100%;
  }
}
</style>