<template>
  <ShadCard :id="`service-${index + 1}`" :data-service="service.name" class="p-0 relative cursor-pointer" @click="() => showServiceDetails=!showServiceDetails" @mouseenter="() => showIndicatorPhrase=true" @mouseleave="() => showIndicatorPhrase=false">
    <ShadCardContent v-if="!showServiceDetails" class="p-0 rounded-lg">
      <img src="/hero/hair8.jpg" class="aspect-square object-cover rounded-lg w-[300px]" alt="" />

      <div class="absolute bottom-0 left-0 p-5 text-brand-brown-50">
        <p class="text-light text-sm">Coupe sur</p>
        <p class="font-semibold uppercase">cheveux sec . <span class="font-bold">{{ service.price }}€</span></p>

        <Transition enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut">
          <p v-if="showIndicatorPhrase">En savoir plus</p>
        </Transition>
      </div>
    </ShadCardContent>

    <ShadCardContent class="service h-[300px] w-[300px] overflow-x-hidden text-wrap text-lightp p-8 text-sm bg-brand-brown-300 rounded-lg" v-else>
      <p class="mb-5 font-light">
        {{ service.description }}
      </p>
      
      <h4 class="font-bold mb-5">Contenu de la prestation</h4>
      <ul class="has-[li]:space-y-1">
        <li v-for="(content, index) in serviceContent" :key="index" class="list-disc list-inside">
          {{ content }}
        </li>
      </ul>

      <NuxtAnalytics event="generate_lead" :params="{ event_label: service.name, event_category: 'telephone' }">
        <template #default="{ attrs }">
          <ShadButton :id="`tel-service-${index + 1}`" class="mt-3 rounded-full" size="sm" as-child @click="() => attrs.sendTemplateEvent()">
            <BaseTelephoneLink :with-icon="true" text="Réserver" />
          </ShadButton>
        </template>
      </NuxtAnalytics>
    </ShadCardContent>
  </ShadCard>
</template>

<script setup lang="ts">
import type { Service, ServiceSection } from '~/data'

const props = defineProps<{ index: number, service: Service }>()

const showIndicatorPhrase = ref<boolean>(false)
const showServiceDetails = ref<boolean>(false)

const serviceSection = inject<ServiceSection>('serviceSection')

const serviceContent = computed(() => {
  const globalServiceContent = serviceSection?.service_content || []
  return [...props.service.service_content, ...globalServiceContent]
})
</script>

<style lang="scss" scoped>
.service::-webkit-scrollbar {
  display: none;
}
</style>
