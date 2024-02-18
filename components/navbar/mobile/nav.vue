<template>
  <Popover v-slot="{ open }">
    <PopoverButton
      class="fixed flex items-center px-4 py-2 text-sm font-medium rounded-full shadow-lg right-5 top-5 group bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
    >
      Menu
      <p
        class="w-2 h-auto ml-3 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
      >
        icon
      </p>
    </PopoverButton>
    <PopoverOverlay
      class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80"
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
        class="fixed z-50 p-8 origin-top bg-white inset-x-4 top-8 rounded-3xl ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
      >
        <div class="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" class="p-1 -m-1">
            <p class="w-6 h-6 text-zinc-500 dark:text-zinc-400">icon</p>
          </PopoverButton>
          <h2 class="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
        </div>
        <nav class="mt-6">
          <ul
            class="-my-2 text-base divide-y divide-zinc-100 text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300"
          >
            <NavbarMobileItem href="/about">About</NavbarMobileItem>
            <NavbarMobileItem href="/articles">Articles</NavbarMobileItem>
            <NavbarMobileItem href="/projects">Projects</NavbarMobileItem>
            <NavbarMobileItem href="/speaking">Speaking</NavbarMobileItem>
            <NavbarMobileItem href="/uses">Uses</NavbarMobileItem>
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
