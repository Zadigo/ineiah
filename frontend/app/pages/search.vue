<template>
  <div class="">
    <volt-container size="sm" class="mt-30">
      <volt-card>
        <template #content>
          <!-- Search input -->
          <div class="relative mb-6">
            <volt-input-text v-model="query" />
          </div>
      
          <!-- Type filters -->
          <div class="flex gap-2 mb-8 flex-wrap">
            <volt-button v-for="type in (['all', 'product', 'page', 'content'] as const)" :key="type" @click="activeType = type" >
              {{ type }} 
              <!-- ({{ counts[type] }}) -->
            </volt-button>
          </div>
      
          <!-- Empty state -->
          <p v-if="!query" class="text-gray-400 text-center mt-16">
            Start typing to search…
          </p>        
        </template>
      </volt-card>
      
      <ul v-if="searchedItems.length > 0" class="space-y-1 my-20">
        <li v-for="item in searchedItems" :key="item.id">
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
/**
 * Search
 */

const { googleSearchResolver } = useServices()
const { googleSearchResolver: _privacyGoogleSearchResolver } = useWebsitePolicies()
const { query, activeType, searchedItems } = useGoogleSearch(googleSearchResolver, _privacyGoogleSearchResolver)

/**
 * SEO
 */

useSeoMeta({
  title: query.value ? `Search: ${query.value}` : 'Search',
  robots: 'noindex', // search pages shouldn't be indexed
})
</script>
