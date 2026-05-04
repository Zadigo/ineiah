<template>
  <div class="service h-75 w-75 overflow-x-hidden text-wrap text-lightp p-8 text-sm bg-primary-300 dark:bg-primary-900 rounded-lg">
    <p class="mb-5 font-light">
      {{ service.description || serviceSection.globalDescription }}
    </p>

    <h4 class="font-bold mb-5">{{ $t('Contenu de la prestation') }}</h4>
    <ul class="has-[li]:space-y-1">
      <li v-for="(step, contentIdx) in serviceIncludes" :key="contentIdx" class="list-disc list-inside">
        {{ $t(step) }}
      </li>
    </ul>

    <nuxt-analytics event="generate_lead" :params="{ event_label: `${serviceSection.name} - ${service.name}`, event_category: 'telephone', value: service.price || 0 }">
      <template #default="{ attrs }">
        <base-telephone-button :id="`tel-service-${props.index + 1}`" button-class="mt-5" @click="async () => await attrs.sendTemplateEvent()" />
      </template>
    </nuxt-analytics>
  </div>
</template>

<script setup lang="ts">
import type { Service, ServiceSection } from '~/types'

const props = defineProps<{ index: number, service: Service, serviceSection: ServiceSection }>()

/**
 * Services
 */

// Merge includes from the specificservice and
// with the ones from the service section
const serviceIncludes = computed(() => {
  return [...props.service.includes, ...props.serviceSection.includes || []]
})
</script>
