<template>
  <a :href="`tel:${telephone || businessDetails.contact.telephone}`" class="block">
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
import type { Nullable } from '~/types';

const {
  telephone = null,
  text = 'Nous appeler',
  withIcon = true,
  size = 'small'
} = defineProps<{ telephone?: Nullable<string>, text?: string, withIcon?: boolean, size?: ButtonProps['size'] }>()
</script>
