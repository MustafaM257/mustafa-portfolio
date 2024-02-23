<script setup>
import socialLinks from "~/data/links.json";
const biography = [
  "Boasting a <span class='font-bold text-blue-100'> typing speed that blurs the line between man and machine</span>, my fingers dance across the keys at a pace so electrifying, it could power a small city, or at the very least, churn out code faster than you can say <span class='text-red-500'> 'syntax error'</span>.",
  "From crafting elegant solutions that speak volumes of my knack for innovation to debugging with the precision of a digital surgeon, my journey in tech is nothing short of a high-speed chase towards the future.",
  "Buckle up, and let's accelerate beyond the realms of possibility, one keystroke at a time.",
  "TL;DR: I'm a software developer, and I write 150+ Words Per Minute!.",
];
</script>
<template>
  <Home id="home" />
  <About
    id="about"
    name="Mustafa"
    location="New Jersey, United States"
    imageUrl="/mustafa.jpg"
    :biography="biography"
    :socialLinks="socialLinks"
  />
  <Experience id="experience" />
  <Projects id="projects" />
  <Contact id="contact" />
</template>
