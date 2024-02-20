<template>
  <Card3D class="experience-card">
    <h1 class="text-2xl font-bold">{{ item.title }}</h1>
    <h3 class="text-xl font-semibold">{{ item.company }}</h3>
    <p class="text-sm font-medium text-right whitespace-nowrap">
      {{ item.period }} | {{ item.location }}
    </p>
    <Timeline :items="item.description" />
  </Card3D>
</template>
<script setup>
const props = defineProps({
  title: String,
  item: Object,
});
</script>
