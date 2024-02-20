<template>
  <div class="flow-root">
    <ul role="list" class="-mb-8">
      <li v-for="(item, index) in items" :key="index">
        <div class="relative pb-8">
          <span
            v-if="index !== items.length - 1"
            class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-white"
            aria-hidden="true"
          ></span>
          <div class="relative flex space-x-3">
            <div>
              <span
                class="flex items-center justify-center w-8 h-8 rounded-full"
              >
                <!-- Icon can be dynamic based on item, if needed -->
              </span>
            </div>
            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
              <div>
                <p class="text-sm">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  items: Array,
});
</script>
