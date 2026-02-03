<template>
  <div :id="`service-${index + 1}`" class="relative bg-surface-200 cursor-pointer" @click="() => toggleServiceDetails()">
    <div v-if="!showServiceDetails" ref="serviceEl" class="p-0 rounded-lg overflow-hidden">
      <nuxt-img :src="service.image || '/hero/hair12.jpg'" class="transition-all ease-in-out xl:hover:scale-105 xl:hover:rotate-2 aspect-square object-cover rounded-lg w-[300px]" alt="" />

      <div class="absolute bottom-0 left-0 p-5 text-primary-50">
        <p class="font-light text-sm">Coupe <span v-if="service.name">sur cheveux</span></p>
        <p class="font-semibold uppercase">{{ service.name }} . <span class="font-bold">{{ service.price }}€</span></p>

        <transition enter-from-class="opacity-0" enter-to-class="opacity-100 animate-fadeindown">
          <div v-if="isHovered && !isMobile" class="flex items-center space-x-2">
            <icon name="lucide:arrow-up-right" />
            <p>{{ $t('En savoir plus') }}</p>
          </div>
        </transition>
      </div>
    </div>

    <template v-else>
      <services-card-info v-if="serviceSection" :index="index" :service="service" :service-section="serviceSection" />
      <volt-skeleton v-else class="h-75 w-75 rounded-lg" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { serviceSectionKey } from '~/data'
import type { Service, ServiceSection } from '~/types'

defineProps<{ index: number, service: Service }>()

/**
 * Mobile
 */

const isMobile = useMediaQuery('(max-width: 768px)')

/**
 * Toggles
 */

const [showServiceDetails, toggleServiceDetails] = useToggle<boolean>(false)

/**
 * Click outside
 */

const serviceEl = useTemplateRef('serviceEl')
const isHovered = ref(false)

 if (import.meta.client) {
  onClickOutside(serviceEl, () => toggleServiceDetails(false))

  const _isHovered = useElementHover(serviceEl)
  syncRef(isHovered, _isHovered, { direction: 'rtl' })
 }

/**
 * Global Services
 */

const serviceSection = inject<ServiceSection>(serviceSectionKey)
</script>

<style lang="scss" scoped>
.service::-webkit-scrollbar {
  display: none;
}
</style>
