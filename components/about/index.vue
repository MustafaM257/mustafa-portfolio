<template>
  <div class="w-full px-2 mx-auto lg:py-2 max-w-7xl lg:px-8">
    <div
      class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
    >
      <div class="lg:pl-20">
        <div class="max-w-xs px-2.5 lg:max-w-none">
          <Card3D>
            <NuxtImg
              :src="imageUrl"
              alt="Profile image"
              class="object-cover pointer-events-none aspect-square rotate-3 rounded-2xl"
            />
          </Card3D>
        </div>
      </div>
      <div class="lg:order-first lg:row-span-2">
        <h1 class="text-3xl font-bold tracking-wide sm:text-5xl">
          I’m <span class="text-blue-500">{{ name }}</span> . I live in
          {{ location }}.
        </h1>
        <div class="mt-6 text-base space-y-7">
          <p
            v-for="(paragraph, index) in biography"
            :key="index"
            v-html="paragraph"
          ></p>
        </div>
      </div>
      <div class="lg:pl-20">
        <ul role="list" class="flex flex-col gap-5">
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
  </div>
</template>

<script setup>
defineProps({
  name: String,
  location: String,
  imageUrl: String,
  biography: Array,
  socialLinks: Array,
});
</script>
