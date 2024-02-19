<template>
  <div class="w-full px-2 py-10 mx-auto max-w-7xl lg:px-8">
    <div
      class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
    >
      <div class="lg:order-first lg:row-span-2">
        <h1
          class="text-3xl font-bold tracking-wide text-zinc-800 sm:text-5xl dark:text-zinc-100"
        >
          Work
        </h1>
        <div class="mt-6 text-base space-y-7 text-zinc-600">
          <ExperienceCard
            v-for="experience in work"
            :item="experience"
            class="px-4 py-8 bg-blue-500"
          />
        </div>
      </div>
      <div class="lg:pl-20">
        <ul role="list" class="flex flex-col gap-5 text-white">
          <!-- <NuxtLink
            v-for="link in socialLinks"
            :key="link.platform"
            :to="link.url"
            target="_blank"
            class="transition-all hover:text-blue-500"
          > -->
          <h1
            class="text-3xl font-bold tracking-wide text-zinc-800 sm:text-5xl dark:text-zinc-100"
          >
            Skills
          </h1>
          <li class="flex flex-row flex-wrap gap-5">
            <Icon name="i-logos:nuxt" v-for="i in 10" class="w-32 h-32" />
          </li>
          <!-- </NuxtLink> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const work = [
  {
    title: "Full Stack Developer",
    company: "techKinks",
    period: "07/2022 – 12/2023",
    location: "Beirut, Lebanon",
    description: [
      "Spearheaded the development of a Vue/Nuxt based web application, resulting in a 40% increase in user engagement.",
      "Developed robust back-end systems with Node.js, enhancing scalability and performance.",
      "Led the integration of CMS Medusa, enhancing content management capabilities and scalability for eCommerce.",
      "Designed and implemented a UI library using Nuxt3 and Tailwind CSS, reducing development time for future projects by 30%.",
      "Mentored interns, significantly improving their coding skills and project contribution rates.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "02/2021 – 07/2022",
    location: "Beirut, Lebanon",
    description: [
      " Developed MERN stack web applications, focusing on responsive design and cross- browser compatibility, resulting in high client satisfaction.",
      "Translated Figma prototypes into high-fidelity, interactive user interfaces, enhancing user experience and engagement.",
      "Stayed abreast of open source projects to push towards modern and efficient web solutions.",
    ],
  },
  {
    title: "Programming Lab Assistant",
    company: "Lebanese  University",
    period: "01/2022 – 04/2022",
    location: "Beirut, Lebanon",
    description: [
      "Enhanced students' understanding of programming and algorithms through innovative teaching and mentorship.",
      "Led a 12-week intensive training program, integrating Moodle for interactive learning experiences.",
      "Provided personalized mentorship, aiding students in overcoming academic challenges and achieving success.",
    ],
  },
];
const education = {
  title: "Bachelor of Computer Science",
  company: "Lebanese University",
  period: "2020 – 2023",
  location: "Beirut, Lebanon",
  description: [
    "Related Course Work: Data Structures, Algorithms, Object-Oriented Programming, Web Development, Database Management Systems, Software Engineering, Operating Systems, Computer Networks, and Security.",
  ],
};
</script>
