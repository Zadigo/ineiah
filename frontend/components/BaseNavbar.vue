<template>
  <nav :class="{ 'bg-transparent shadow-md': !showBackground, 'bg-brand shadow-md': showBackground }" class="fixed w-full z-50 md:py-2">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile-->
          <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-brand/50 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!--
              Icon when menu is open.

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex shrink-0 items-center">
            <NuxtLinkLocale to="/">
              <NuxtImg class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            </NuxtLinkLocale>
          </div>

          <div class="hidden sm:ml-6 sm:block md:mx-auto">
            <div class="flex space-x-4 has-[a.router-link-exact-active]:text-brand-500">
              <NuxtLinkLocale to="/nos-prestations" class="rounded-md px-3 py-2 text-lg font-semibold uppercase text-white hover:text-brand-500">
                Prestations
              </NuxtLinkLocale>

              <NuxtLinkLocale to="/notre-histoire" class="rounded-md px-3 py-2 text-lg font-semibold uppercase text-white hover:text-brand-500">
                Notre histoire
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { y } = useScroll(window)

const showBackground = ref<boolean>(false)

watch(y, (value) => {
  if (value >= 147) {
    showBackground.value = true
  } else {
    showBackground.value = false
  }
})
</script>
