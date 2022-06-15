import { Ref } from "vue";
import throttle from "lodash.throttle";

type WindowSizeOptions = {
  throttle: number;
};

export function useWindowSize(options: WindowSizeOptions = { throttle: 100 }): {
  width: Ref<number>;
  height: Ref<number>;
} {
  const width = ref(0);
  const height = ref(0);

  function setSize() {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }

  const onResize = throttle(setSize, options.throttle);

  onBeforeMount(setSize);

  onMounted(() => {
    window.addEventListener("resize", onResize, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });

  return { width, height };
}
