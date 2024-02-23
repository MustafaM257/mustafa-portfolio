<template>
  <div class="w-full px-2 py-10 mx-auto max-w-7xl lg:px-8">
    <div
      class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
    >
      <div class="space-y-5 lg:order-first lg:row-span-2">
        <h1 class="text-3xl font-bold tracking-wide sm:text-5xl">Work</h1>
        <div class="mt-6 text-base space-y-7">
          <ExperienceCard
            v-for="experience in work"
            :item="experience"
            class="px-4 py-8 bg-neutral-500"
          />
        </div>
        <h1 class="text-3xl font-bold tracking-wide sm:text-5xl">Education</h1>
        <div class="mt-6 text-base space-y-7">
          <ExperienceCard :item="education" class="px-4 py-8 bg-blue-300" />
        </div>
      </div>
      <div class="lg:pl-20">
        <h1 class="text-3xl font-bold tracking-wide sm:text-5xl">Skills</h1>
        <div class="mt-6 text-base space-y-7">
          <ul
            role="list"
            class="grid grid-cols-2 mt-6 text-center gap-x-4 gap-y-4 hover:opacity-90"
          >
            <li
              v-for="skill in skills"
              :key="skill.name"
              class="w-full px-4 py-4 transition-all shadow-lg rounded-2xl skill-card"
            >
              <NuxtLink
                :to="skill.link"
                class="block text-lg font-bold text-white hover:underline"
                target="_blank"
              >
                <Icon :name="skill.icon" class="w-16 h-16 mx-auto" />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import work from "~/data/work.json";
import education from "~/data/education.json";
import skills from "~/data/skills.json";
</script>
