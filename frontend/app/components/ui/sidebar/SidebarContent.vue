<template>
  <div data-sidebar="content" :class="contentClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "~/lib/utils"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
const contentClass = cn('flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden', props.class)
</script>
