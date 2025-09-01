<template>
  <div class="inline-flex gap-2 mt-5 rounded-full shadow-none">
    <ShadButton v-for="social in footer.socials" :key="social.name" :id="`social-${social.name.toLowerCase()}`" variant="link" as-child>
      <a :href="social.url" target="_blank">
        <Icon :name="`fa-brands:${social.icon}`" :alt="`${businessDetails.name} - ${social.name}`" class="text-brand-500" size="20" />
      </a>
    </ShadButton>
  </div>
</template>

<script setup lang="ts">
import { footer } from '~/data'
</script>
