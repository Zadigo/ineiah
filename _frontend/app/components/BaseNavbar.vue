<template>
  <nav :class="{ 'bg-primary-100/20 dark:bg-primary-900/30': !showBackground, 'bg-primary-500 dark:bg-primary-800 shadow-md': showBackground }" class="fixed top-0 w-full z-50 md:py-2 transition-all ease-in-out">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <volt-secondary-button aria-label="Open mobile menu" @click="$emit('mobile-menu')">
            <icon name="i-fa7-solid:bars" />
          </volt-secondary-button>
        </div>

        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start text-primary-50 dark:text-primary-200">
          <div class="flex shrink-0 items-center">
            <nuxt-link-locale id="link-home-nav" to="/">
              <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" :alt="businessDetails.name">
            </nuxt-link-locale>
          </div>

          <div class="hidden sm:ml-6 sm:block md:mx-auto">
            <ul class="flex space-x-4 has-[a]:transition-all has-[a]:ease-in-out">
              <li v-for="item in routes" :id="create(item.id, 'link-nav')" :key="item.path" class="p-2 rounded-xl has-[.router-link-exact-active]:bg-primary-100/30">
                <nuxt-link-locale :to="item.path" :class="linkTheme">
                  {{ $t(item.title) }}
                </nuxt-link-locale>
              </li>
            </ul>
          </div>

          <base-telephone-button  class="hidden md:flex ml-auto">
            Nous rappeler
          </base-telephone-button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { businessDetails } from '~/data'
import type { BaseRoute } from '~/types'

defineEmits<{ 'mobile-menu': [] }>()

const route = useRoute()

/**
 * Mobile
 */

const showBackground = ref<boolean>(false)

if (import.meta.client) {
  onMounted(() => {
    const { y } = useScroll(window)

    if (route.meta.name === 'privacy') {
      showBackground.value = true
    }

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

/**
 * Routes
 */

const routes: BaseRoute[] = [
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

/**
 * Theming
 */

const linkTheme = ref(`
  px-3 py-2 text-lg font-semibold uppercase 
  text-primary-50 hover:text-primary-400 relative
`)

const { create } = useDynamicId()
</script>

<style lang="css">
a#nav-link.router-link-exact-active {
  display: inline-block;
  color: var(--color-primary-400);
}

a#nav-link::before {
  content: "";
  position: absolute;
  width: 0;
  height: 4px;
  bottom: 0;
  left: 50%;
  background-color: var(--color-primary-400);
  transition: all 0.4s;
}

a#nav-link:hover::before {
  width: 100%;
  left: 0;
}
</style>
