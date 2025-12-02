<template>
  <a :href="`tel:${telephone}`">
    <icon v-if="withIcon" name="i-fa7-solid:phone" />

    <slot>
      {{ text }}
    </slot>
  </a>
</template>

<script setup lang="ts">
import { businessDetails } from '~/data'

const {
  telephone = businessDetails.contact.telephone, 
  text = 'Nous appeler',
  withIcon = true
} = defineProps<{ telephone?: string, text?: string, withIcon?: boolean }>()
</script>
