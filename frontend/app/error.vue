<template>
  <section class="font-sans relative">
    <nuxt-layout>
      <section class="error-page my-20">
        <div class="mx-auto md:max-w-2xl">
          <volt-card>
            <template #content>
              <h1 class="text-5xl">{{ error?.status }}</h1>
              <p class="text-2xl font-light">{{ error?.message }}</p>

              <nuxt-link-locale id="link-error" to="/" aria-label="Accueil" @click="handleError">
                {{ 'Accueil' }}
              </nuxt-link-locale>
            </template>
          </volt-card>

          <dev-only>
            <div class="p-5 rounded-3xl bg-primary-100 mt-10">
              <div class="bg-primary-200 rounded-3xl p-10 max-w-4xl overflow-x-scroll">
                <pre>
                  {{ JSON.stringify(error, null, 2) }}
                </pre>
              </div>
            </div>
          </dev-only>
        </div>
      </section>
    </nuxt-layout>
  </section>
</template>

<script setup lang="ts">
const error = useError()

const url = useRuntimeConfig().public.siteUrl

/**
 * A function that handles the
 * redirect to the home page
 */
function handleError() {
  clearError({ redirect: '/' })
}
</script>
