import { ref, computed, onMounted, onUnmounted } from 'vue';
export function useListToggle(minChatWidthPx = 75, maxChatWidthPercent = 200) { //200% for mobile version
  const isCollapsed = ref(false);
  let startX = 0;

  const chatListWidthCSS = computed(() => {
    if (isCollapsed.value) {
      return `${minChatWidthPx}px`;
    } else {
      const screenWidth = window.innerWidth;
      const maxChatWidthPx = (maxChatWidthPercent / 100) * screenWidth;
      return `${maxChatWidthPx}px`;
    }
  });

  const onMouseDown = (event) => {    
    startX = event.clientX;
    const currentWidthPx = isCollapsed.value
      ? minChatWidthPx
      : (maxChatWidthPercent / 100) * window.innerWidth;
    if (event.clientX < currentWidthPx + 20) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      document.body.style.userSelect = 'none';
    }
  };

  const onMouseMove = (event) => {
    
    const deltaX = event.clientX - startX;
    if (deltaX < -30 && !isCollapsed.value) {
      isCollapsed.value = true;
    } else if (deltaX > 30 && isCollapsed.value) {
      isCollapsed.value = false;
    }
  };

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    document.body.style.userSelect = '';
  };

  const onTouchStart = (event) => {
    console.log("onTouchStart")
    const touch = event.touches[0];
    startX = touch.clientX;
  };

  const onTouchMove = (event) => {
    
    const touch = event.touches[0];
    const deltaX = touch.clientX - startX;

    if (deltaX < -20 && !isCollapsed.value) {
      isCollapsed.value = true;
    } else if (deltaX > 20 && isCollapsed.value) {
      isCollapsed.value = false;
    }
  };

  onMounted(() => {
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchstart', onTouchStart);
    document.addEventListener('touchmove', onTouchMove);
  });

  onUnmounted(() => {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('touchstart', onTouchStart);
    document.removeEventListener('touchmove', onTouchMove);
  });

  return {
    isCollapsed,
    chatListWidthCSS,
    onMouseDown,
  };
}