<template>
  <div
    class="relative px-2 py-16 mx-auto max-w-7xl lg:grid lg:grid-cols-5 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"
  >
    <div class="py-16 lg:col-span-2 lg:py-24 xl:pr-12">
      <ul
        role="list"
        class="flex flex-col max-w-lg gap-5 mx-auto mt-6 text-white"
      >
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
    <div class="py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
      <form
        action="#"
        method="POST"
        class="grid max-w-lg grid-cols-1 mx-auto gap-y-6 lg:max-w-none"
      >
        <div>
          <label for="full-name" class="sr-only">Full name</label>
          <input
            type="text"
            name="full-name"
            id="full-name"
            autocomplete="name"
            class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Full name"
          />
        </div>
        <div>
          <label for="email" class="sr-only">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Email"
          />
        </div>
        <div>
          <label for="phone" class="sr-only">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            autocomplete="tel"
            class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Phone"
          />
        </div>
        <div>
          <label for="message" class="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Message"
          />
        </div>
        <div>
          <button
            type="submit"
            class="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
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
