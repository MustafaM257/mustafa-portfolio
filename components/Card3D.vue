<template>
  <div
    ref="target"
    class="p-8 bg-blue-300 rounded shadow-2xl card"
    :style="{
      transform: cardTransform,
      transition: 'transform 0.25s ease-out',
    }"
  >
    <div v-for="(item, index) in experience" :key="index">
      <h1>{{ item.title }}</h1>
      <h3>{{ item.company }}</h3>
      <div class="text-sm text-right text-white whitespace-nowrap">
        {{ item.period }} | {{ item.location }}
      </div>
      <Timeline :items="item.description" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useMouseInElement } from "@vueuse/core";
import Timeline from "./Timeline.vue";

const target = ref(null);
const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target);

const cardTransform = computed(() => {
  const MAX_ROTATION = 12;
  const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2);
  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2);
  return isOutside.value
    ? ""
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});

const props = defineProps({
  experience: Array,
});
</script>
