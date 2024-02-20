<template>
  <footer class="text-white">
    <div class="px-6 py-20 mx-auto overflow-hidden max-w-7xl sm:py-24 lg:px-8">
      <p class="text-lg italic font-medium leading-5 text-center">
        Developed by Mustafa with ❤️.
      </p>
      <div class="flex justify-center mt-10 space-x-10">
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
      </div>
      <p class="mt-10 text-xs leading-5 text-center">
        &copy; {{ currentYear }} All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
const socialLinks = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/mustafa.m257/",
    icon: "i-line-md:instagram",
    text: "Follow on Instagram!",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/mustafam257/",
    icon: "i-line-md:linkedin",
    text: "Follow on LinkedIn!",
  },
  {
    platform: "GitHub",
    url: "https://github.com/MustafaM257",
    icon: "i-line-md:github",
    text: "Follow on Github!",
  },
  {
    platform: "Email",
    url: "mailto:mustafa.m257@proton.me",
    icon: "i-line-md:email",
    text: "mustafa.m257@proton.me",
  },
  {
    platform: "Phone",
    url: "tel:+13473822775",
    icon: "i-line-md:phone",
    text: "+1 (347) 382-2775",
  },
];
</script>
