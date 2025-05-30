<template>
  <section id="site">
    <ClientOnly>
      <BaseNavbar />
    </ClientOnly>
    
    <slot />

    <BaseReassurance />
  </section>
</template>
