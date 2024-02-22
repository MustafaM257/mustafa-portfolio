<template>
  <div
    class="relative px-2 py-16 mx-auto max-w-7xl lg:grid lg:grid-cols-5 lg:col-span-2 lg:px-8 xl:pr-12"
  >
    <div class="py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
      <ContactSection />
    </div>
    <div class="py-16 lg:col-span-2 lg:py-24 xl:pr-12">
      <h1 class="text-3xl font-bold tracking-wide">Contact me!</h1>
      <ul role="list" class="flex flex-col max-w-lg gap-5 mx-auto mt-6">
        <NuxtLink
          v-for="link in socialLinks"
          :key="link.platform"
          :to="link.url"
          target="_blank"
          class="transition-all hover:text-blue-500"
        >
          <li class="flex gap-5">
            <Icon :name="link.icon" class="w-6 h-6" />
            <p>{{ link.text }}</p>
          </li>
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>

<script setup>
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
