<template>
  <div
    class="relative flex items-center px-6 py-5 space-x-3 bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
  >
    <div class="flex-shrink-0">
      <img class="w-10 h-10 rounded-full" :src="project.imageUrl" alt="" />
    </div>
    <div class="flex-1 min-w-0">
      <a href="#" class="focus:outline-none">
        <span class="absolute inset-0" aria-hidden="true"></span>
        <p class="text-sm font-medium text-gray-900">{{ project.name }}</p>
        <p class="text-sm text-gray-500 truncate">{{ project.role }}</p>
      </a>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: false,
  },
});
</script>
