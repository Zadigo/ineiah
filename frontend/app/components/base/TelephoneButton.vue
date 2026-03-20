<template>
  <client-only>
    <a :id="id" :class="buttonClass" :href="`tel:${resolvedTelephone}`" class="block">
      <volt-button :size="size" class="w-full md:w-auto" rounded>
        <icon v-if="withIcon" name="i-fa7-solid:phone" />
        <slot>
          {{ $t(text) }}
        </slot>
      </volt-button>
    </a>

    <template #fallback>
      <a :href="`tel:${fallbackTelephone}`" class="block">
        <volt-button :size="size" class="w-full md:w-auto" rounded>
          <icon v-if="withIcon" name="i-fa7-solid:phone" />
          {{ text }}
        </volt-button>
      </a>
    </template>
  </client-only>
</template>

<script setup lang="ts">
import type { ButtonProps } from 'primevue/button'
import type { Nullable } from '~/types'

// Prevent Vue from auto-inheriting attrs on the root <ClientOnly>
defineOptions({ inheritAttrs: false })

const { businessDetails } = useBusinessDetails()

const {
  id,
  buttonClass,
  telephone = null,
  text = 'Me contacter',
  withIcon = true,
  size = 'small'
} = defineProps<{ id?: string, buttonClass?: string, telephone?: Nullable<string>, text?: string, withIcon?: boolean, size?: ButtonProps['size'] }>()

const fallbackTelephone  = businessDetails.contact.telephone
const resolvedTelephone = computed(() => telephone || fallbackTelephone)
</script>
