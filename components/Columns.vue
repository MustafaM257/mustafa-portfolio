<script setup>
const testimonials = [
  {
    quote: "Nostrud reprehenderit magna deserunt dolor.",
    author: {
      name: "Evan you",
      job: "Creator of Vue.js and Vite",
      src: "https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/yyx990803",
    },
  },
  {
    quote:
      "Irure irure dolore Lorem dolor anim velit id fugiat minim cupidatat dolore nulla Lorem aliquip cillum.",
    author: {
      name: "Guillermo Rauch",
      job: "Co-founder and CEO of Vercel",
      src: "https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/rauchg",
    },
  },
  {
    quote:
      "Magna labore amet velit eiusmod velit dolor cillum sunt est tempor ea commodo fugiat amet tempor.",
    author: {
      name: "Addy Osmani",
      job: "Chief Engineer of Chrome",
      src: "https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/addyosmani",
    },
  },
  {
    quote:
      "Culpa amet do sit officia non magna cillum ullamco dolore qui sunt occaecat.",
    author: {
      name: "Sarah Drasner",
      job: "Director of Engineering, Google",
      src: "https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/sdras",
    },
  },
  {
    quote: "Ex veniam eu incididunt.",
    author: {
      name: "Dominik Angerer",
      job: "Co-founder of Storyblok",
      src: "https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/DominikAngerer",
    },
  },
  {
    quote:
      "Nostrud id Lorem laborum ut eiusmod voluptate aliquip non esse sint occaecat.",
    author: {
      name: "Savas Vedova",
      job: "Sernior Frontend Engineer at GitLab",
      src: "https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/svedova",
    },
  },
];
</script>

<template>
  <div class="gap-8 space-y-8 column-1 md:columns-2 lg:columns-3'">
    <div v-for="(testimonial, index) in testimonials" :key="index">
      <q class="italic text-gray-500 dark:text-gray-400">
        {{ testimonial.quote }}
      </q>

      <div class="flex items-center mt-3 gap-x-3">
        <img
          :src="testimonial.author.src"
          :alt="testimonial.author.name"
          size="sm"
        />

        <div class="min-w-0 text-sm">
          <p class="font-semibold">
            {{ testimonial.author.name }}
          </p>
          <p class="truncate">
            {{ testimonial.author.job }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
