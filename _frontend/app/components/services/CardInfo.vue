<template>
  <div class="service h-[300px] w-[300px] overflow-x-hidden text-wrap text-lightp p-8 text-sm bg-primary-300 dark:bg-primary-900 rounded-lg">
    <p class="mb-5 font-light">
      {{ service.description }}
    </p>

    <h4 class="font-bold mb-5">Contenu de la prestation</h4>
    <ul class="has-[li]:space-y-1">
      <li v-for="(step, contentIdx) in serviceIncludes" :key="contentIdx" class="list-disc list-inside">
        {{ step }}
      </li>
    </ul>

    <nuxt-analytics event="generate_lead" :params="{ event_label: service.name, event_category: 'telephone' }">
      <template #default="{ attrs }">
        <volt-button :id="`tel-service-${index + 1}`" class="mt-3 rounded-full" size="sm" @click="() => attrs.sendTemplateEvent()">
          <base-telephone-link :with-icon="true" text="Réserver" />
        </volt-button>
      </template>
    </nuxt-analytics>
  </div>
</template>

<script setup lang="ts">
import type { Service, ServiceSection } from '~/data'

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
