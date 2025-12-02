<template>
  <volt-card :id="`service-${index + 1}`" class="relative bg-surface-200 cursor-pointer" @click="() => toggleServiceDetails()">
    <template #content>
      <div v-if="!showServiceDetails" ref="serviceEl" class="p-0 rounded-lg">
        <img src="/hero/hair12.jpg" class="aspect-square object-cover rounded-lg w-[300px]" alt="">

        <div class="absolute bottom-0 left-0 p-5 text-primary-50">
          <p class="text-light text-sm">Coupe sur</p>
          <p class="font-semibold uppercase">cheveux sec . <span class="font-bold">{{ service.price }}€</span></p>

          <transition enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut">
            <p v-if="isHovered">En savoir plus</p>
          </transition>
        </div>
      </div>

      <services-card-info v-else :index="index" :service="service" :service-section="serviceSection" />
    </template>
  </volt-card>
</template>

<script setup lang="ts">
import { serviceSectionKey, type Service, type ServiceSection } from '~/data'

defineProps<{ index: number, service: Service }>()

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
   syncRef(isHovered, _isHovered, { direction: 'ltr' })
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
