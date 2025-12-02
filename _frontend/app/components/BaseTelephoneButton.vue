<template>
  <a :href="`tel:${telephone}`" class="block">
    <volt-button :size="size" class="w-full md:w-auto" rounded>
      <icon v-if="withIcon" name="i-fa7-solid:phone" />
      <slot>
        {{ text }}
      </slot>
    </volt-button>
  </a>
</template>

<script setup lang="ts">
import type { ButtonProps } from 'primevue/button';
import { businessDetails } from '~/data'

const {
  telephone = businessDetails.contact.telephone,
  text = 'Nous appeler',
  withIcon = true,
  size = 'small'
} = defineProps<{ telephone?: string, text?: string, withIcon?: boolean, size?: ButtonProps['size'] }>()
</script>
