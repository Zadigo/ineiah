<template>
  <a :href="`tel:${fallbackTelephone}`">
    <icon v-if="withIcon" name="i-fa7-solid:phone" />

    <slot>
      {{ $t(text) }}
    </slot>
  </a>
</template>

<script setup lang="ts">
/**
 * Business details
 */

const { businessDetails } = useBusinessDetails()

const {
  text = 'Nous appeler',
  withIcon = true
} = defineProps<{ text?: string, withIcon?: boolean }>()

const fallbackTelephone = businessDetails.contact.telephone
</script>
