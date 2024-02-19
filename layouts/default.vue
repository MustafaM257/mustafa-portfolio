<template>
  <ClientOnly>
    <NavbarMobileNav class="pointer-events-auto md:hidden" />
    <NavbarDesktopNav class="hidden pointer-events-auto md:block" />
  </ClientOnly>
  <slot />
  <Footer />
</template>
