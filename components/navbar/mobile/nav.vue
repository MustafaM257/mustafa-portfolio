<template>
  <Popover v-slot="{ open }">
    <PopoverButton
      class="fixed z-50 flex items-center px-4 py-2 text-sm font-medium rounded-full shadow-lg top-5 right-5 group bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
    >
      Menu

      <Icon
        name="i-material-symbols:keyboard-double-arrow-down-rounded"
        class="w-6 h-6 mt-1 ml-2 text-zinc-500"
      />
    </PopoverButton>
    <PopoverOverlay
      class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm"
    />
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <!-- Panel goes here -->
      <PopoverPanel
        focus
        class="fixed z-50 p-8 origin-top bg-white inset-x-4 top-8 rounded-3xl ring-1 ring-zinc-900/5"
      >
        <div class="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" class="p-1 -m-1">
            <Icon
              name="i-material-symbols:close-rounded"
              class="w-6 h-6 text-zinc-500"
            />
          </PopoverButton>
          <h2 class="text-sm font-medium text-zinc-600">Navigation</h2>
        </div>
        <nav class="mt-6">
          <ul class="-my-2 text-base divide-y divide-zinc-100">
            <NavbarMobileItem href="#home">Home</NavbarMobileItem>
            <NavbarMobileItem href="#about">About</NavbarMobileItem>
            <NavbarMobileItem href="#experience">Experience</NavbarMobileItem>
            <NavbarMobileItem href="#projects">Projects</NavbarMobileItem>
            <NavbarMobileItem href="#contact">Contact</NavbarMobileItem>
          </ul>
        </nav>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverOverlay,
} from "@headlessui/vue";
</script>
