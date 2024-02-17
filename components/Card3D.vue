<script setup lang="ts">
const target = ref<HTMLElement>();
const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target);

const cardTransform = computed(() => {
  const MAX_ROTATION = 12; // I can play around with this value
  const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2); // handles x-axis

  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2); // handles y-axis
  return isOutside.value
    ? ""
    : ` perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});
</script>
<template>
  <div class="flex items-center justify-center w-full h-screen bg-black">
    <div
      ref="target"
      class="p-8 bg-blue-300 rounded shadow-2xl w-80 h-80 card"
      :style="{
        transform: cardTransform,
        transition: 'transform 0.25s ease-out',
      }"
    >
      <h1>Testing 3d card</h1>
      <p>
        The operating system is not working on the PC, I like to use simple
        english instead of lorem ipsum!
      </p>
    </div>
  </div>
</template>
<style scoped></style>
