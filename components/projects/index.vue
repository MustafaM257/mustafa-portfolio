<template>
  <div class="w-full px-2 py-10 mx-auto max-w-7xl lg:px-8">
    <div class="lg:order-first lg:row-span-2">
      <h1 class="text-3xl font-bold tracking-wide sm:text-5xl">Projects</h1>
      <div class="mt-6 text-base space-y-7">
        <ProjectsGrid :actions="actions" class="project-card" />
      </div>
    </div>
  </div>
</template>
<script setup>
import actions from "~/data/projects.json";
</script>
