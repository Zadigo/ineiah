<template>
  <volt-drawer v-model:visible="show">
    <div id="mobile-links" class="mt-20 px-5 h-screen overflow-y-scroll relative">
      <div v-for="item in mobileLinks" :key="item.to" class="p-3 rounded-md bg-primary-500 text-primary-100 mb-1 uppercase text-semibold">
        <nuxt-link-locale :to="item.to" class="w-full flex items-center gap-2 text-sm" @click="show=false">
          <!-- <Icon v-if="item.to==='/'" name="fa-solid:home" /> -->
          {{ item.name }}
        </nuxt-link-locale>
      </div>

      <!-- Socials -->
      <base-socials />
    </div>
  </volt-drawer>
</template>

<script setup lang="ts">
import { mobileLinks } from '~/data'

const show = defineModel<boolean>('show', { default: false })
</script>

<style lang="scss" scoped>
#mobile-links::-webkit-scrollbar {
  display: none;
}
</style>
