<template>
  <div :id="`package-${index + 1}`" :data-package="section.name" class="my-5">
    <h2 class="font-bold text-4xl px-4 mb-7 text-primary-700 dark:text-primary-400">
      {{ section.name }}
    </h2>

    <!-- Scrollable Area -->
    <volt-custom-scroll-area class="whitespace-nowrap">
      <div class="flex p-4 space-x-4 w-max">
        <services-card v-for="(service, serviceIndex) in section.services" :key="service.name" :service="service" :index="serviceIndex" />
      </div>
      <volt-custom-scroll-bar orientation="horizontal" />
    </volt-custom-scroll-area>
  </div>
</template>

<script setup lang="ts">
import { serviceSectionKey, type ServiceSection } from '~/data'

const props = defineProps<{ index: number, section: ServiceSection }>()

/**
 * Section
 */

provide(serviceSectionKey, props.section)
</script>
