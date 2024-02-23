<template>
  <li>
    <NuxtLink :to="href" class="text-neutral-950 hover:text-neutral-700">
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
