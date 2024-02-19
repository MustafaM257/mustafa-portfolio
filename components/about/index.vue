<template>
  <div class="w-full mx-auto max-w-7xl lg:px-8">
    <div
      class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
    >
      <div class="lg:pl-20">
        <div class="max-w-xs px-2.5 lg:max-w-none">
          <NuxtImg
            src="/mustafa.jpg"
            alt=""
            class="object-cover pointer-events-none aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
          />
        </div>
      </div>
      <div class="lg:order-first lg:row-span-2">
        <h1
          class="text-3xl font-bold tracking-wide text-zinc-800 sm:text-5xl dark:text-zinc-100"
        >
          I’m Mustafa. I live in New Jersey, United States.
        </h1>
        <div class="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
          <p>Lorem ipsum....</p>
          <p>Another lorem ipsum....</p>
          <p>And another lorem ipsum....</p>
        </div>
      </div>
      <div class="lg:pl-20">
        <ul role="list" class="text-white">
          <a href="#"> Follow on X </a>
          <a href="#" class="mt-4"> Follow on Instagram </a>
          <a href="#" class="mt-4"> Follow on GitHub </a>
          <a href="#" class="mt-4"> Follow on LinkedIn </a>
          <a
            href="mailto:mustafa.m257@proton.me"
            icon="{MailIcon}"
            class="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
          >
            mustafa.m257@proton.me
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>
