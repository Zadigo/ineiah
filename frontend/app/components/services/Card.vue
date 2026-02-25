<template>
  <article :id="`service-${index + 1}`" class="relative bg-surface-200 cursor-pointer" @click="() => toggleServiceDetails()">
    <div v-if="!showServiceDetails" ref="serviceEl" class="p-0 rounded-lg overflow-hidden">
      <nuxt-img :src="service.image || '/hero/hair12.jpg'" class="transition-all ease-in-out xl:hover:scale-105 xl:hover:rotate-2 aspect-square object-cover rounded-lg w-75" :alt="`${service.category} - ${service.name} - ${service.gender} - ${get('legalName')}`" />

      <div class="absolute bottom-0 left-0 p-5 text-primary-50">
        <p v-if="service.category === 'Coupe'" class="font-light text-sm">{{ $t('Coupe sur cheveux') }}</p>
        <p v-else-if="service.category === 'Soin'" class="font-light text-sm">{{ $t('Soin sur cheveux') }}</p>
        <p v-else-if="service.category === 'Coloration'" class="font-light text-sm">{{ $t('Coloration sur cheveux') }}</p>

        <p class="font-semibold uppercase">{{ $t(service.name || '') }} • <span v-if="service.price" class="font-bold">{{ $n(service.price, 'currency') }}</span> <span v-else="service.priceText">{{ $t(service.priceText || '') }}</span> • <span>{{ $t(service.gender) }}</span></p>

        <transition 
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-300"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
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
  </article>
</template>

<script setup lang="ts">
import { serviceSectionKey, useBusinessDetails } from '~/data'
import type { Service, ServiceSection } from '~/types'

defineProps<{ index: number, service: Service }>()

const { get } = await useBusinessDetails()

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
