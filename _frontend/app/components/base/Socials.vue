<template>
  <div class="inline-flex justify-start w-full gap-2 mt-5 shadow-none">
    <a v-for="social in activeSocials" :id="`social-${social}`" :key="social" :href="getSocial(social)?.url" target="_blank">
      <volt-secondary-button variant="link" rounded>
        <icon :name="getSocialIcon(social)" :alt="`${get('legalName')} - ${social}`" class="text-brand-500" size="20" />
      </volt-secondary-button>
    </a>
  </div>
</template>

<script setup lang="ts">
const { getSocial, getSocialIcon, activeSocials, get } = useBusinessDetails()
</script>
