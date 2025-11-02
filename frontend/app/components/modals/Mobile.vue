<template>
  <ShadSheet v-model:open="show">
    <ShadSheetContent side="left">
      <div id="mobile-links" class="mt-20 px-5 h-screen overflow-y-scroll relative">
        <div v-for="item in mobileLinks" :key="item.to" class="p-3 rounded-md bg-brand-brown-500 text-brand-brown-100 mb-1 uppercase text-semibold">
          <NuxtLinkLocale :to="item.to" class="w-full flex items-center gap-2 text-sm" @click="show=false">
            <!-- <Icon v-if="item.to==='/'" name="fa-solid:home" /> -->
            {{ item.name }}
          </NuxtLinkLocale>
        </div>

        <!-- Socials -->
        <base-socials />
      </div>
    </ShadSheetContent>
  </ShadSheet>
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
