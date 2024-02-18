<script setup lang="ts">
// From useMouse composable via vueuse
const { x, y } = useMouse();
// Get distance from mouse to center of the screen & use to calculate size
const { width, height } = useWindowSize();

const dx = computed(() => Math.abs(x.value - width.value / 2));
const dy = computed(() => Math.abs(y.value - height.value / 2));

// Pythagorean theorem to calculate distance from center of the screen to mouse position
const distance = computed(() => Math.sqrt(dx.value ** 2 + dy.value ** 2));

const size = computed(() => Math.max(300 - distance.value / 3, 150));
const opacity = computed(() => {
  Math.min(Math.max(size.value / 300, 0.7), 1);
});
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
    class="w-screen h-screen bg-gradient-to-b from-black to-black from-80% flex items-center justify-center relative overflow-hidden"
  >
    <!-- This will be the floating mouse effect -->
    <div
      class="absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-green-500/30 blur-3xl"
      :style="{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
      }"
    />
    <p
      class="text-white uppercase text-7xl"
      ref="logo"
      :style="{
        maskImage: logoGradient,
      }"
    >
      Mustafa
    </p>
  </div>
</template>
