<template>
  <footer class="text-white">
    <div class="px-6 py-20 mx-auto overflow-hidden max-w-7xl sm:py-24 lg:px-8">
      <p class="text-lg italic font-medium leading-5 text-center">
        Developed by Mustafa with ❤️.
      </p>
      <!-- <div class="flex justify-center mt-10 space-x-10">
        <NuxtLink
          v-for="link in socialLinks"
          :key="link.platform"
          :to="link.url"
          target="_blank"
          class="transition-all hover:text-blue-500"
        >
          <li class="flex gap-5">
            <Icon :name="link.icon" class="w-6 h-6" />
          </li>
        </NuxtLink>
      </div> -->
      <p class="py-5 mt-10 text-xs leading-5 text-center">
        I'm an open sourcer at heart, embracing the share-and-thrive mentality.
        Find the essence of this on my GitHub.
      </p>
      <p class="text-center">&copy; {{ currentYear }} All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
import socialLinks from "~/data/links.json";
</script>
