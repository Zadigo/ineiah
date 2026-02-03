<template>
  <div class="bg-center bg-cover bg-no-repeat rounded-lg overflow-hidden" :style="{ backgroundImage: `url(/hero/hair11.jpg)` }">
    <div class="p-8 text-primary-100 dark:text-primary-50 md:p-20">
      <div class="flex-col justify-center mx-auto text-center max-w-7xl">
        <h2 class="text-5xl md:text-7xl font-bold mb-5 font-title">
          <slot name="title">
            {{ $t('Prête à se sublimer ?') }}
          </slot>
        </h2>

        <p class="font-light max-w-lg mx-auto">
          <slot>
            {{ $t('Un simple appel suffit pour échanger, poser tes questions et réserver ton moment. Parlons de tes cheveux, de tes envies, et créons ensemble le style qui te ressemble.') }}
          </slot>
        </p>
        
        <div class="mt-10">
          <slot name="cta">
            <base-telephone-button :id="id" size="large" :with-icon="true">
              <template #default>
                <slot name="ctaName">
                  Obtenir mon moment plaisir
                </slot>
              </template>
            </base-telephone-button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { id = 'tel-offer-section' } = defineProps<{ id?: string }>()
</script>
