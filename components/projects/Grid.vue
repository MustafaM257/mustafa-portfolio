<template>
  <div
    class="overflow-hidden divide-y divide-gray-200 shadow rounded-2xl sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0"
  >
    <div
      v-for="(action, actionIdx) in actions"
      :key="action.title"
      :class="[
        actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
        actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
        actionIdx === actions.length - 1
          ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
          : '',
        'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
      ]"
    >
      <div>
        <span
          :class="[
            action.iconBackground,
            action.iconForeground,
            'inline-flex rounded-lg p-3 ring-4 ring-white',
          ]"
        >
          <Icon :name="action.icon" class="w-6 h-6" aria-hidden="true" />
        </span>
      </div>
      <div class="mt-8">
        <h3 class="text-base font-semibold leading-6">
          <a :href="action.href" class="focus:outline-none">
            <!-- Extend touch target to entire panel -->
            <span class="absolute inset-0" aria-hidden="true" />
            {{ action.title }}
          </a>
        </h3>
        <p class="mt-2 text-sm">
          Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit
          repellendus qui ut at blanditiis et quo et molestiae.
        </p>
      </div>
      <span
        class="absolute pointer-events-none right-6 top-6"
        aria-hidden="true"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  actions: Array,
});
</script>
