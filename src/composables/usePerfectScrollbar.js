import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

export function usePerfectScrollbar() {
  const scrollContainer = ref(null);
  let psInstance = null;

  const initializeScrollbar = () => {
    if (scrollContainer.value) {
      psInstance = new PerfectScrollbar(scrollContainer.value, {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20,
        suppressScrollX: true,
      });
    }
  };

  const updateScrollbar = () => {
    if (psInstance) {
      psInstance.update();
    }
  };

  const destroyScrollbar = () => {
    if (psInstance) {
      psInstance.destroy();
      psInstance = null;
    }
  };

  onMounted(() => {
    initializeScrollbar();

    nextTick(() => {
      updateScrollbar();
    });
  });

  onBeforeUnmount(() => {
    destroyScrollbar();
  });

  return {
    scrollContainer,
    updateScrollbar,
  };
}