<template>
  <div :id="`package-${index + 1}`" :data-package="section.name" class="my-5">
    <h2 class="font-bold text-4xl px-4 mb-7 text-brand-brown-700">
      {{ section.name }}
    </h2>

    <ShadScrollArea class="whitespace-nowrap">
      <div class="flex p-4 space-x-4 w-max">
        <ServicesCard v-for="(service, serviceIndex) in section.services" :key="service.name" :service="service" :index="serviceIndex" />
      </div>
      <ShadScrollBar orientation="horizontal" />
    </ShadScrollArea>
  </div>
</template>

<script setup lang="ts">
import type { ServiceSection } from '~/data'

const props = defineProps<{ index: number, section: ServiceSection }>()

provide('serviceSection', props.section)
</script>
