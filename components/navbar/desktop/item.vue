<template>
  <li>
    <NuxtLink
      :to="href"
      class="relative block px-3 py-2 transition text-neutral-950 hover:text-neutral-700"
      :class="[
        isActive ? 'text-neutral-950' : '',
        !isActive ? 'hover:text-neutral-700 ' : '',
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
