<template>
  <nav :class="{ 'bg-transparent': !showBackground, 'bg-brand-brown-500 shadow-md': showBackground }" class="fixed top-0 w-full z-50 md:py-2 transition-all ease-in-out">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile-->
          <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-brand-brown-700 hover:bg-brand-brown-400 hover:text-brand-brown-500 focus:ring-2 focus:ring-brand-brown-500 focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false" @click="() => emit('mobile-menu')">
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
            <NuxtLinkLocale id="link-home-nav" to="/">
              <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" :alt="businessDetails.name" />
            </NuxtLinkLocale>
          </div>

          <div class="hidden sm:ml-6 sm:block md:mx-auto">
            <div class="flex space-x-4 has-[a]:transition-all has-[a]:ease-in-out">
              <NuxtLinkLocale v-for="route in routes" :key="route.path" :to="route.path" :class="linkTheme" :id="create(route.id, 'link-nav')">
                {{ route.title }}
              </NuxtLinkLocale>
            </div>
          </div>

          <ShadButton id="tel-navbar" class="rounded-full md:visible" as-child>
            <BaseTelephoneLink />
          </ShadButton>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { businessDetails } from '~/data'

const emit = defineEmits<{
  'mobile-menu': []
}>()

const showBackground = ref<boolean>(false)

if (import.meta.client) {
  onMounted(() => {
    const { y } = useScroll(window)
    
    watch(y, (value) => {
      if (value >= 100) {
        showBackground.value = true
      } else {
        showBackground.value = false
      }
    }, {
      immediate: true
    })
  })
}

const routes = [
  {
    id: 'home',
    title: 'Accueil',
    path: '/'
  },
  {
    id: 'offers',
    title: 'Prestations',
    path: '/nos-prestations'
  },
  {
    id: 'about us',
    title: 'Notre histoire',
    path: '/notre-histoire'
  }
]

const linkTheme = ref(`
  rounded-md px-3 py-2 text-lg font-semibold uppercase 
  text-brand-brown-50 hover:text-brand-brown-400 relative
`)

const { create } = useDynamicId()
</script>

<style lang="css">
a#nav-link.router-link-exact-active {
  display: inline-block;
  color: var(--color-brand-brown-400);
}

a#nav-link::before {
  content: "";
  position: absolute;
  width: 0;
  height: 4px;
  bottom: 0;
  left: 50%;
  background-color: var(--color-brand-brown-400);
  transition: all 0.4s;
}

a#nav-link:hover::before {
  width: 100%;
  left: 0;
}
</style>
