<script setup lang="ts">
import { computed, ref } from "vue";
// From useMouse composable via vueuse
const { x, y } = useMouse();
const { width, height } = useWindowSize();

const props = defineProps({
  name: {
    type: String,
    default: "Mustafa", // Default name
  },
  profession: {
    type: String,
    default: "Software Developer", // Default profession
  },
});

const dx = computed(() => Math.abs(x.value - width.value / 2));
const dy = computed(() => Math.abs(y.value - height.value / 2));
const distance = computed(() => Math.sqrt(dx.value ** 2 + dy.value ** 2));
const size = computed(() => Math.max(300 - distance.value / 3, 150));

const logo = ref<HTMLElement>();
const logoGradient = computed(() => {
  const rectangle = logo.value?.getBoundingClientRect();
  let xPos = x.value - (rectangle?.left ?? 0);
  let yPos = y.value - (rectangle?.top ?? 0);
  return `radial-gradient(circle at ${xPos}px ${yPos}px, black 30%, transparent 100%)`;
});
</script>

<template>
  <div
    class="w-screen h-screen bg-gradient-to-b from-gray-900 to-neutral-900 from-70% flex items-center justify-center flex-col gap-5 relative overflow-hidden"
  >
    <div
      class="absolute hidden -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none lg:block bg-blue-500/30 blur-3xl"
      :style="{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
      }"
    />
    <p class="text-lg font-bold">Hey, I'm</p>
    <h1 class="text-5xl text-center uppercase" ref="logo" :style="{}">
      {{ name }}
    </h1>
    <h3 class="text-2xl">{{ profession }}</h3>
  </div>
</template>
