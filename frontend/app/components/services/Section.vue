<template>
  <div :id="`package-${index + 1}`" :data-package="section.name" class="my-5">
    <h2 class="font-bold text-2xl md:text-4xl px-4 mb-7 text-primary-700 dark:text-primary-400">
      {{ $t(section.name) }}
    </h2>
    
    <div class="flex justify-start items-center gap-2 w-full md:w-400 overflow-x-scroll">
      <services-card v-for="(service, serviceIndex) in section.services" :key="service.name || serviceIndex" :service="service" :index="serviceIndex" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ServiceSection } from '~/types'
import { serviceSectionKey } from '~/constants/symbols'

const props = defineProps<{ index: number, section: ServiceSection }>()

/**
 * Section
 */

provide(serviceSectionKey, props.section)
</script>
