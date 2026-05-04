<template>
  <volt-card class="bg-surface-500/10 has-[p]:leading-8">
    <template #content>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div v-show="!invert">
          <client-only>
            <nuxt-img v-motion-fade-visible-once :delay="150" :src="image" class="aspect-square object-cover rounded-lg w-full" alt="" />
          </client-only>
        </div>

        <!-- mt-5 md:mt-0 md:max-w-lg has-[p]:space-y-3 -->
        <div class="flex md:max-w-xl mx-auto md:justify-center md:items-center order-2 xl:order-1">
          <div>
            <client-only>
              <h3 v-motion-slide-visible-once-bottom :delay="200" class="font-semibold text-5xl mb-5 text-primary-500 dark:text-primary-200 font-title leading-15">
                <slot name="title" />
              </h3>
            </client-only>

            <slot />
          </div>
        </div>

        <div v-show="invert" id="inverted-image" class="rounded-lg w-full">
          <client-only>
            <nuxt-img v-motion-fade-visible-once :src="image" class="aspect-square object-cover rounded-md w-full" alt="" />
          </client-only>
        </div>
      </div>
    </template>
  </volt-card>
</template>

<script setup lang="ts">
const { invert = false, image } = defineProps<{ invert: boolean, image: string }>() 
</script>
