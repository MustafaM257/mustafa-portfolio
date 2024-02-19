<template>
  <Effect id="home" />
  <div id="about" class="h-[200vh]">
    <Card3D v-for="i in 3" />
    <Columns />
  </div>
</template>
