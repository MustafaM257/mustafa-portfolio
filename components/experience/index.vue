<template>
  <div
    class="flex flex-row items-center justify-between w-full gap-5 py-16 mx-auto lg:px-8 max-w-7xl"
  >
    <div class="">
      <h1
        class="text-3xl font-bold tracking-wide text-zinc-800 sm:text-5xl dark:text-zinc-100"
      >
        Work
      </h1>
      <div class="flex flex-col max-w-3xl gap-5 py-10">
        <ExperienceCard
          v-for="experience in work"
          :item="experience"
          class="px-4 py-8 bg-blue-500"
        />
      </div>
      <h1
        class="text-3xl font-bold tracking-wide text-zinc-800 sm:text-5xl dark:text-zinc-100"
      >
        Education
      </h1>
      <div class="flex flex-col max-w-3xl gap-5 py-10">
        <ExperienceCard :item="education" class="px-4 py-8 bg-blue-500" />
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <Icon name="i-logos:nuxt" v-for="i in 10" class="w-10 h-10" />
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
