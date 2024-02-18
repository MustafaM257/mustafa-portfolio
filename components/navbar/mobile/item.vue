<template>
  <li>
    <PopoverButton class="block py-2">
      <slot />
    </PopoverButton>
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
