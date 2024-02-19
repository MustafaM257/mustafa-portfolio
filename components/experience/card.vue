<template>
  <Card3D>
    <h1 class="text-2xl font-bold">{{ item.title }}</h1>
    <h3 class="text-xl font-semibold">{{ item.company }}</h3>
    <div
      class="text-sm font-medium text-right text-neutral-100 whitespace-nowrap"
    >
      {{ item.period }} | {{ item.location }}
    </div>
    <Timeline :items="item.description" />
  </Card3D>
</template>
<script setup>
const props = defineProps({
  title: String,
  item: Object,
});
</script>
