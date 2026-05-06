<template>
  <div class="">
    <volt-container size="sm">
      <volt-card class="mt-35">
        <template #content>
          <!-- Search input -->
          <div class="relative mb-6">
            <volt-input-text v-model="query" />
          </div>

          <!-- Type filters -->
          <div class="flex gap-2 mb-8 flex-wrap">
            <volt-button v-for="type in (['all', 'product', 'page', 'content'] as const)" :key="type" @click="activeType = type">
              {{ type }}
            </volt-button>
          </div>

          <!-- Empty state -->
          <p v-if="!query" class="text-gray-400 text-center mt-16">
            Start typing to search…
          </p>
        </template>
      </volt-card>

      <ul v-if="allItems.length > 0" class="space-y-1 my-20">
        <li v-for="item in allItems" :key="item.id">
          <volt-card>
            <template #content>
              <nuxt-link-locale :to="item.to" class="group block">
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-xs uppercase tracking-wide font-semibold text-primary/70">
                    {{ item.type }}
                  </span>
                </div>

                <h2 class="text-lg font-semibold group-hover:text-primary transition">
                  {{ item.title }}
                </h2>

                <p v-if="item.description" class="text-primary-500 text-sm mt-1 line-clamp-2">
                  {{ item.description }}
                </p>
              </nuxt-link-locale>
            </template>
          </volt-card>
        </li>
      </ul>

      <p v-else class="text-gray-500 text-center mt-16">
        No results for <strong>{{ query }}</strong>
      </p>
    </volt-container>
  </div>
</template>

<script setup lang="ts">
import type { ServiceSection, GalleryImage } from '~/types'

definePageMeta({
  label: 'Search'
})

/**
 * Services
 */

const { services } = useServices()

const resolvedServices = objectResolver<ServiceSection>(services, (item) => {
  return {
    id: item.name,
    title: item.name,
    description: item.globalDescription,
    to: '/nos-prestations',
    type: 'product',
    slug: item.name,
    tags: []
  }
})

/**
 * Gallery
 */

const { images } = useImageGallery()

const resolvedGallery = objectResolver<GalleryImage>(images, (item) => {
  return {
    id: item.name,
    title: item.name,
    description: '',
    to: '/galerie',
    type: 'content',
    slug: item.name,
    tags: []
  }
})

/**
 * Privacy Policy
 */

const { defaultPolicies } = useWebsitePolicies()

const resolvedPolicies = objectResolver<Policy>(defaultPolicies, (item) => {
  const description = item.content.reduce((acc, block) => {
    if (block.type == 'paragraph') {
      return acc + (block.text || '') + ' '
    } else if (block.type == 'list') {
      if (isDefined(block.items)) {
        return acc + block.items.map(item => item.text || '').join(' ') + ' '
      }
    }
  }, '')

  return {
    id: item.title,
    title: item.title,
    description,
    to: '/legal/confidentialite',
    type: 'page',
    slug: item.title,
    tags: []
  }
})

/**
 * Search 2
 */

const activeType = ref<ActiveType>('all')

const { query, allItems } = useGoogleSearchComposable({
  activeType,
  resolvers: [
    useGoogleSearchItems(resolvedServices, (item, searchValue) => {
      return item.title.toLowerCase().includes(searchValue)
    }),
    useGoogleSearchItems(resolvedGallery, (item, searchValue) => {
      return item.title.toLowerCase().includes(searchValue)
    }),
    useGoogleSearchItems(resolvedPolicies, (item, searchValue) => {
      return item.title.toLowerCase().includes(searchValue) || (item.description || '').toLowerCase().includes(searchValue)
    })
  ]
})

/**
 * SEO
 */

useSeoMeta({
  title: query.value ? `Search: ${query.value}` : 'Search',
  robots: 'noindex' // search pages shouldn't be indexed
})
</script>
