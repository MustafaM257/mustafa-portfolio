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
        <ul role="list" class="flex flex-col gap-5 text-white">
          <li class="flex gap-5">
            <Icon name="i-line-md:instagram" class="w-6 h-6" />
            <p>Follow on Instagram!</p>
          </li>
          <li class="flex gap-5">
            <Icon name="i-line-md:linkedin" class="w-6 h-6" />
            <p>Follow on LinkedIn!</p>
          </li>
          <li class="flex gap-5">
            <Icon name="i-line-md:github" class="w-6 h-6" />
            <p>Follow on Github!</p>
          </li>
          <li
            class="flex gap-5 pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
          >
            <Icon name="i-line-md:email" class="w-6 h-6" />
            <p>mustafa.m257@proton.me</p>
          </li>
          <li class="flex gap-5">
            <Icon name="i-line-md:phone" class="w-6 h-6" />
            <p>+1 (347) 382-2775</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
