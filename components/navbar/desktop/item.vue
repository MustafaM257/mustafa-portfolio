<template>
  <li>
    <NuxtLink
      to="#"
      class="relative block px-3 py-2 transition"
      :class="[
        isActive ? 'text-teal-500 ' : '',
        !isActive ? 'hover:text-teal-500 ' : '',
      ]"
    >
      <slot />
      <span
        v-if="isActive"
        class="absolute h-px inset-x-1 -bottom-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0"
      />
    </NuxtLink>
  </li>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    default: "#",
  },
});
let isActive = useRoute().path === props.href;
</script>
