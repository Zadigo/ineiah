<template>
  <volt-card class="bg-surface-500/10 has-[p]:leading-8">
    <template #content>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div v-show="!invert" class="overflow-hidden">
          <nuxt-img :src="image" class="aspect-square object-cover rounded-lg" :alt="imageAlt" />
        </div>
        
        
        <div class="flex md:max-w-xl mx-auto md:justify-center md:items-center order-2 xl:order-1">
          <div>
            <h3 class="font-semibold text-5xl mb-5 text-primary-500 dark:text-primary-200 font-title leading-15">
              {{ invert }}
              <slot name="title" />
            </h3>

            <slot />
          </div>
        </div>

        <div v-show="invert" class="overflow-hidden">
          <nuxt-img :src="image" class="aspect-square object-cover rounded-lg" :alt="imageAlt" />
        </div>
      </div>
    </template>
  </volt-card>
</template>

<script setup lang="ts">
const { image, imageAlt, invert = false } = defineProps<{ image: string, imageAlt: string, invert?: boolean }>() 
</script>
