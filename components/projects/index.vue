<template>
  <div class="w-full px-2 py-10 mx-auto max-w-7xl lg:px-8">
    <div class="lg:order-first lg:row-span-2">
      <h1 class="text-3xl font-bold tracking-wide sm:text-5xl">Projects</h1>
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
      <div class="mt-6 text-base space-y-7">
        <ProjectsGrid :actions="actions" class="project-card" />
      </div>
    </div>
  </div>
</template>
<script setup>
const actions = [
  {
    index: 0,
    title: "Learning Management System",
    description:
      "A PHP based LMS for schools and colleges, featuring online course materials, attendance tracking, and more.",
    href: "https://github.com/MustafaM257/LMS",
    icon: "i-iconoir:learning",
  },
  {
    index: 1,
    title: "GitHub Insights Website",
    href: "https://github.com/MustafaM257/React-GithubSearchUsers",
    icon: "i-mdi:github-face",
    description:
      "A React based website to search for GitHub users and view their repositories and followers via Github APIs.",
  },
  {
    index: 2,

    title: "Jobs APIs",
    href: "https://github.com/MustafaM257/Jobs-API",
    icon: "i-ic:baseline-work",
    description:
      "A Node.js based RESTful API for job listings and applications.",
  },
  {
    index: 3,
    title: "Cocktails Catalogue",
    href: "https://github.com/MustafaM257/cocktailsDB_api_react",
    icon: "i-streamline:cocktail",
    description:
      "A React based website to search for cocktails and view their recipes via TheCocktailDB APIs.",
  },
];
</script>
