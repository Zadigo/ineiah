<template>
  <a :href="`tel:${telephone || businessDetails.contact.telephone}`">
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
  telephone, 
  text = 'Nous appeler',
  withIcon = true
} = defineProps<{ telephone?: string, text?: string, withIcon?: boolean }>()
</script>
