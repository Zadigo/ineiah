<template>
  <volt-card class="bg-surface-500/10 has-[p]:leading-8">
    <template #content>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div v-show="!invert">
          <nuxt-img :src="image" class="aspect-square object-cover rounded-lg w-full" alt="" />
        </div>

        <!-- mt-5 md:mt-0 md:max-w-lg has-[p]:space-y-3 -->
        <div class="flex md:max-w-xl mx-auto md:justify-center md:items-center order-2 xl:order-1">
          <div>
            <h3 class="font-semibold text-5xl mb-5 text-primary-500 dark:text-primary-200 font-title leading-15">
              <slot name="title" />
            </h3>

            <slot />
          </div>
        </div>

        <div v-show="invert" class="rounded-lg w-full">
          <nuxt-img :src="image" class="aspect-square object-cover rounded-md w-full" alt="" />
        </div>
      </div>
    </template>
  </volt-card>
</template>

<script setup lang="ts">
const { invert = false, image } = defineProps<{ invert?: boolean, image: string }>() 
</script>
