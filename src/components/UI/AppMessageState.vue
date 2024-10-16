<template>
  <div class="chat__empty">
    <slot></slot>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.chat__empty {
  align-self: center;
  padding: 8px;
  color: #f0f0f0;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  font-size: 14px;
  margin-bottom: 80px;
}
</style>