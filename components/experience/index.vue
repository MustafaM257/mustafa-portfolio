<template>
  <div class="flex flex-col w-full gap-5 py-16 mx-auto max-w-7xl lg:px-8">
    <h1
      class="text-3xl font-bold tracking-wide text-zinc-800 sm:text-5xl dark:text-zinc-100"
    >
      My Experience
    </h1>
    <Card3D v-for="i in 5" class="max-w-3xl" />
  </div>
</template>
