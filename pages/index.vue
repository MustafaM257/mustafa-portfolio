<script setup>
const socialLinks = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/mustafa.m257/",
    icon: "i-line-md:instagram",
    text: "Follow on Instagram!",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/mustafam257/",
    icon: "i-line-md:linkedin",
    text: "Follow on LinkedIn!",
  },
  {
    platform: "GitHub",
    url: "https://github.com/MustafaM257",
    icon: "i-line-md:github",
    text: "Follow on Github!",
  },
  {
    platform: "Email",
    url: "mailto:mustafa.m257@proton.me",
    icon: "i-line-md:email",
    text: "mustafa.m257@proton.me",
  },
  {
    platform: "Phone",
    url: "tel:+13473822775",
    icon: "i-line-md:phone",
    text: "+1 (347) 382-2775",
  },
];
const biography = [
  "Boasting a <span class='font-bold text-blue-100'> typing speed that blurs the line between man and machine</span>, my fingers dance across the keys at a pace so electrifying, it could power a small city, or at the very least, churn out code faster than you can say <span class='text-red-500'> 'syntax error'</span>.",
  "From crafting elegant solutions that speak volumes of my knack for innovation to debugging with the precision of a digital surgeon, my journey in tech is nothing short of a high-speed chase towards the future.",
  "Buckle up, and let's accelerate beyond the realms of possibility, one keystroke at a time.",
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
</template>
