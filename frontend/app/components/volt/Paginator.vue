<template>
  <Paginator unstyled :pt="theme" :pt-options="{ mergeProps: ptViewMerge }">
    <template #container="{ page, pageCount, pageLinks, changePageCallback, firstPageCallback, lastPageCallback, prevPageCallback, nextPageCallback }">
      <div class="flex flex-wrap gap-2 items-center justify-center">
        <SecondaryButton text rounded :disabled="page === 0" @click="firstPageCallback">
          <template #icon>
            <AngleDoubleLeftIcon />
          </template>
        </SecondaryButton>
        <SecondaryButton text rounded :disabled="page === 0" @click="prevPageCallback">
          <template #icon>
            <AngleLeftIcon />
          </template>
        </SecondaryButton>
        <div class="items-center justify-center gap-2 hidden sm:flex">
          <SecondaryButton v-for="pageLink of pageLinks" :key="pageLink" :text="page + 1 !== pageLink" rounded :class="['shrink-0 min-w-10 h-10', { 'bg-highlight!': page + 1 === pageLink }]" @click="() => changePageCallback(pageLink - 1)">
            {{ pageLink }}
          </SecondaryButton>
        </div>
        <SecondaryButton text rounded :disabled="page === pageCount! - 1" @click="nextPageCallback">
          <template #icon>
            <AngleRightIcon />
          </template>
        </SecondaryButton>
        <SecondaryButton text rounded :disabled="page === pageCount! - 1" @click="lastPageCallback">
          <template #icon>
            <AngleDoubleRightIcon />
          </template>
        </SecondaryButton>
      </div>
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </Paginator>
</template>

<script setup lang="ts">
import AngleDoubleLeftIcon from '@primeicons/vue/angle-double-left';
import AngleDoubleRightIcon from '@primeicons/vue/angle-double-right'
import AngleLeftIcon from '@primeicons/vue/angle-left'
import AngleRightIcon from '@primeicons/vue/angle-right'
import Paginator, { type PaginatorPassThroughOptions, type PaginatorProps } from 'primevue/paginator'
import SecondaryButton from '~/components/volt/SecondaryButton.vue'
import { ptViewMerge } from '~/components/volt/utils'

interface Props extends /* @vue-ignore */ PaginatorProps { }
defineProps<Props>()

const theme = ref<PaginatorPassThroughOptions>({
  root: `flex items-center justify-center flex-wrap py-2 px-4 rounded-md gap-1
    bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0`
})
</script>
