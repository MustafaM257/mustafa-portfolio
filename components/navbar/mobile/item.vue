<template>
  <li>
    <NuxtLink :to="href">
      <PopoverButton class="block py-2">
        <slot />
      </PopoverButton>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
// @ts-ignore
import { PopoverButton } from "@headlessui/vue";

const props = defineProps({
  href: {
    type: String,
    default: "#",
  },
});
</script>
