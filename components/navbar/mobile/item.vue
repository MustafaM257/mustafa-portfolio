<template>
  <li>
    <PopoverButton as="{Link}" href="{href}" className="block py-2">
      <slot />
    </PopoverButton>
  </li>
</template>

<script setup>
import { PopoverButton } from "@headlessui/vue";

const props = defineProps({
  href: {
    type: String,
    default: "#",
  },
});
</script>
