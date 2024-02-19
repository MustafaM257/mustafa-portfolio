<template>
  <div class="flow-root">
    <ul role="list" class="-mb-8">
      <li v-for="(event, eventIdx) in items" :key="event.eventIdx">
        <div class="relative pb-8">
          <span
            v-if="eventIdx !== items.length - 1"
            class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
          <div class="relative flex space-x-3">
            <div>
              <span
                :class="[
                  'h-8 w-8 rounded-full flex items-center justify-center',
                ]"
              >
                <div class="w-5 h-5 bg-black rounded-full" aria-hidden="true" />
              </span>
            </div>
            <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
              <div>
                <p class="text-sm text-blue-900">
                  {{ event.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const items = [
  {
    content: "Applied to",
  },
  {
    content: "Advanced to phone screening by",
  },
  {
    content: "Completed phone screening with",
  },
  {
    content: "Advanced to interview by",
  },
  {
    content: "Completed interview with",
  },
];
</script>
