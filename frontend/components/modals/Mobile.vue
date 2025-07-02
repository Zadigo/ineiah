<template>
  <ShadSheet v-model:open="show">
    <ShadSheetContent>
      <div id="mobile-links" class="mt-20 px-5 h-screen overflow-y-scroll">
        <div v-for="item in mobileLinks" :key="item.to" class="p-3 rounded-md bg-brand-pink-500 mb-1 uppercase text-semibold">
          <NuxtLinkLocale :to="item.to" class="w-full flex items-center gap-2" @click="show=false">
            <Icon v-if="item.to==='/'" name="fa-solid:home" />
            {{ item.name }}
          </NuxtLinkLocale>
        </div>
      </div>
    </ShadSheetContent>
  </ShadSheet>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { mobileLinks } from '~/data'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': () => true
}>()

const show = useVModel(props, 'modelValue', emit, {
  passive: true,
  defaultValue: false
})
</script>

<style lang="scss" scoped>
#mobile-links::-webkit-scrollbar {
  display: none;
}
</style>
