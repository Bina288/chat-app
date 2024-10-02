<template>
  <article class="chat-item chat-item--active">
    <div class="chat-item__avatar avatar"></div>
    <div class="chat-item__wrapper">
      <header class="chat-item__info">
        <h4 class="chat-item__title">Чат 1</h4>
        <time class="chat-item__time grey-text" datetime="2023-09-27T19:14"
          >19:14</time
        >
      </header>
      <div class="chat-item__content">
        <p class="chat-item__message grey-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          vehicula ac nulla id egestas. Nulla eu sodales odio.
        </p>
        <div class="chat-item__unread-count">1</div>
      </div>
    </div>
  </article>
  <article class="chat-item">
    <div class="chat-item__avatar avatar"></div>
    <div class="chat-item__wrapper">
      <header class="chat-item__info">
        <h4 class="chat-item__title">Чат 2</h4>
        <time class="chat-item__time grey-text" datetime="2023-09-27T18:30"
          >18:30</time
        >
      </header>
      <div class="chat-item__content">
        <p class="chat-item__message grey-text">Чат был обновлен</p>
      </div>
    </div>
  </article>
  <article class="chat-item">
    <div class="chat-item__avatar avatar"></div>
    <div class="chat-item__wrapper">
      <header class="chat-item__info">
        <h4 class="chat-item__title">Чат 3</h4>
        <time class="chat-item__time grey-text" datetime="2023-09-27T18:30"
          >18:30</time
        >
      </header>
      <div class="chat-item__content">
        <p class="chat-item__message grey-text">
          Ut vitae eleifend est. Integer molestie magna ex, sit amet maximus
          orci iaculis eu.
        </p>
        <div class="chat-item__unread-count">22</div>
      </div>
    </div>
  </article>
  <article class="chat-item">
    <div class="chat-item__avatar avatar"></div>
    <div class="chat-item__wrapper">
      <header class="chat-item__info">
        <h4 class="chat-item__title">Чат 4</h4>
        <time class="chat-item__time grey-text" datetime="2023-09-27T18:30"
          >18:30</time
        >
      </header>
      <div class="chat-item__content">
        <p class="chat-item__message grey-text">
          Ut vitae eleifend est. Integer molestie magna ex, sit amet maximus
          orci iaculis eu.
        </p>
        <div class="chat-item__unread-count">2</div>
      </div>
    </div>
  </article>
  <article class="chat-item">
    <div class="chat-item__avatar avatar"></div>
    <div class="chat-item__wrapper">
      <header class="chat-item__info">
        <h4 class="chat-item__title">Чат 5</h4>
        <time class="chat-item__time grey-text" datetime="2023-09-27T18:30"
          >18:30</time
        >
      </header>
      <div class="chat-item__content">
        <p class="chat-item__message grey-text">
          Ut vitae eleifend est. Integer molestie magna ex, sit amet maximus
          orci iaculis eu.
        </p>
        <div class="chat-item__unread-count">2</div>
      </div>
    </div>
  </article>
  <article class="chat-item">
    <div class="chat-item__avatar avatar"></div>
    <div class="chat-item__wrapper">
      <header class="chat-item__info">
        <h4 class="chat-item__title">Чат 6</h4>
        <time class="chat-item__time grey-text" datetime="2023-09-27T18:30"
          >18:30</time
        >
      </header>
      <div class="chat-item__content">
        <p class="chat-item__message grey-text">
          Ut vitae eleifend est. Integer molestie magna ex, sit amet maximus
          orci iaculis eu.
        </p>
        <div class="chat-item__unread-count">2</div>
      </div>
    </div>
  </article>
  <article class="chat-item">
    <div class="chat-item__avatar avatar"></div>
    <div class="chat-item__wrapper">
      <header class="chat-item__info">
        <h4 class="chat-item__title">Чат 7</h4>
        <time class="chat-item__time grey-text" datetime="2023-09-27T18:30"
          >18:30</time
        >
      </header>
      <div class="chat-item__content">
        <p class="chat-item__message grey-text">
          Ut vitae eleifend est. Integer molestie magna ex, sit amet maximus
          orci iaculis eu.
        </p>
        <div class="chat-item__unread-count">2</div>
      </div>
    </div>
  </article>
  <article class="chat-item">
    <div class="chat-item__avatar avatar"></div>
    <div class="chat-item__wrapper">
      <header class="chat-item__info">
        <h4 class="chat-item__title">Чат 8</h4>
        <time class="chat-item__time grey-text" datetime="2023-09-27T18:30"
          >18:30</time
        >
      </header>
      <div class="chat-item__content">
        <p class="chat-item__message grey-text">
          Ut vitae eleifend est. Integer molestie magna ex, sit amet maximus
          orci iaculis eu.
        </p>
        <div class="chat-item__unread-count">2</div>
      </div>
    </div>
  </article>
  <article class="chat-item">
    <div class="chat-item__avatar avatar"></div>
    <div class="chat-item__wrapper">
      <header class="chat-item__info">
        <h4 class="chat-item__title">Чат 9</h4>
        <time class="chat-item__time grey-text" datetime="2023-09-27T18:30"
          >18:30</time
        >
      </header>
      <div class="chat-item__content">
        <p class="chat-item__message grey-text">
          Ut vitae eleifend est. Integer molestie magna ex, sit amet maximus
          orci iaculis eu.
        </p>
        <div class="chat-item__unread-count">2</div>
      </div>
    </div>
  </article>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.chat-item {
  display: flex;
  gap: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  .chat-item--active,
  .chat-item:hover {
    background-color: white;
  }

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