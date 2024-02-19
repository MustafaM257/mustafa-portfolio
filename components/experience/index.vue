<template>
  <div class="flex flex-col w-full gap-5 py-16 mx-auto max-w-7xl lg:px-8">
    <h1
      class="text-3xl font-bold tracking-wide text-zinc-800 sm:text-5xl dark:text-zinc-100"
    >
      My Experience
    </h1>
    <Card3D v-for="experience in experiences" :experience="experience" />
  </div>
</template>

<script setup>
const experiences = [
  {
    title: "Full Stack Developer",
    company: "techKinks",
    period: "07/2022 – 12/2023",
    location: "Beirut, Lebanon",
    description: [
      "Spearheaded the development of a Vue/Nuxt based web application, resulting in a 40% increase in user engagement.",
      "Developed robust back-end systems with Node.js, enhancing scalability and performance.",
      // More bullet points...
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "02/2021 – 07/2022",
    location: "Beirut, Lebanon",
    description: [
      "Developed MERN stack web applications, focusing on responsive design and cross-browser compatibility, resulting in high client satisfaction.",
      // More bullet points...
    ],
  },
  // More experiences...
];
</script>
