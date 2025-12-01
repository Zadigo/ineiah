<template>
  <div class="inline-flex justify-start w-full gap-2 mt-5 shadow-none">
    <a v-for="social in footer.socials" :id="`social-${social.name.toLowerCase()}`" :key="social.name" :href="social.url" target="_blank">
      <volt-secondary-button variant="link" rounded>
        <icon :name="`fa-brands:${social.icon}`" :alt="`${businessDetails.name} - ${social.name}`" class="text-brand-500" size="20" />
      </volt-secondary-button>
    </a>
  </div>
</template>

<script setup lang="ts">
import { businessDetails, footer } from '~/data'
</script>
