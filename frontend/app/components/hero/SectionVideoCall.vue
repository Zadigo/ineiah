<template>
  <div id="video-call-hero" class="max-w-8xl mx-auto pt-20 px-5 md:px-20">
    <div class="grid grid-cols-1 md:grid-cols-2 bg-primary-200 dark:bg-primary-700 dark:text-primary-200 rounded-lg md:rounded-none md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-lg md:rounded-br-lg overflow-hidden">
      <video class="aspect-video object-fill h-full w-full lg:object-fill" autoplay muted loop playsinline>
        <source src="https://freelance-data-storage.s3.us-east-1.amazonaws.com/hair.mp4" type="video/mp4">
      </video>

      <!-- Info -->
      <div class="p-10 rounded-tr-md rounded-br-md flex-col justify-center content-center text-center max-w-3xl">
        <h2 class="font-semibold uppercase text-primary-800 dark:text-primary-400 text-4xl">
          Une sublime restructuration de la coupe
        </h2>

        <p class="text-2xl font-light mt-10 mb-3">
          Des boucles souples et en bonne santé sans perdre de longueur, c'est tout ce qu'on aime 🤭
        </p>

        <p class="text-2xl font-light">
          Alors ça vous plaît ?
        </p>
      </div>
    </div>

    <div role="contentinfo">
      <div class="p-20 text-center text-primary-500 dark:text-primary-200">
        <p class="font-bold mb-3 text-4xl">Rejoint le <span class="text-primary-800 dark:text-primary-400">#curlymouvement</span></p>
        <p class="text-md">Retrouvez-nous sur instagram <a :href="getSocial('instagram')?.url" :title="getSocial('instagram')?.url">{{ getSocial('instagram')?.handle }}</a></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Business details
 */

const { getSocial } = useBusinessDetails()
</script>
