<template>
  <div
    class="overflow-hidden divide-y divide-gray-200 shadow rounded-2xl sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0"
  >
    <div
      v-for="(action, actionIdx) in actions"
      :key="action.title"
      :class="[
        actionIdx === 0
          ? 'rounded-tl-2xl rounded-tr-2xl sm:rounded-tr-none'
          : '',
        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
        actionIdx === actions.length - 2 ? 'sm:rounded-bl-2xl' : '',
        actionIdx === actions.length - 1
          ? 'rounded-bl-2xl rounded-br-2xl sm:rounded-bl-none'
          : '',
        'group relative bg-blue-500 p-6 focus-within:ring-2 focus-within:ring-inset ',
      ]"
    >
      <div>
        <span
          :class="[
            action.iconBackground,
            action.iconForeground,
            'inline-flex rounded-lg p-3 ring-4 ring-white',
          ]"
        >
          <Icon name="i-logos:html-5" />
        </span>
      </div>
      <div class="mt-8">
        <h3 class="text-base font-semibold leading-6 text-white">
          <a :href="action.href" class="focus:outline-none">
            <!-- Extend touch target to entire panel -->
            <span class="absolute inset-0" aria-hidden="true" />
            {{ action.title }}
          </a>
        </h3>
        <p class="mt-2 text-sm text-white">
          {{ action.description }}
        </p>
      </div>
      <span
        class="absolute pointer-events-none text-neutral-20 right-6 top-6 group-hover:text-black"
        aria-hidden="true"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script setup>
const actions = [
  {
    title: "Learning Management System",
    description:
      "A PHP based LMS for schools and colleges, featuring online course materials, attendance tracking, and more.",
    href: "https://github.com/MustafaM257/LMS",
    // icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "GitHub Insights Website",
    href: "https://github.com/MustafaM257/React-GithubSearchUsers",
    // icon: CheckBadgeIcon,
    description:
      "A React based website to search for GitHub users and view their repositories and followers via Github APIs.",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Jobs APIs",
    href: "https://github.com/MustafaM257/Jobs-API",
    // icon: UsersIcon,
    description:
      "A Node.js based RESTful API for job listings and applications.",
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Cocktails Catalogue",
    href: "https://github.com/MustafaM257/cocktailsDB_api_react",
    // icon: BanknotesIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
    description:
      "A React based website to search for cocktails and view their recipes via TheCocktailDB APIs.",
  },
];
</script>
