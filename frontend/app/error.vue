<template>
  <section class="font-sans bg-primary-500/20 relative">
    <NuxtLayout>
      <section class="error-page my-20">
        <div class="mx-auto md:max-w-2xl">
          <volt-card class="border-none shadow-sm">
            <template #content>
              <h1 class="font-5xl">{{ error?.statusCode }}</h1>
              <p class="font-2xl text-light">{{ error?.message }}</p>

              <nuxt-link-locale id="link-error" href="/" @click="handleError">
                {{ 'Accueil' }}
              </nuxt-link-locale>
            </template>
          </volt-card>

          <DevOnly>
            <div class="text-wrap overflow-y-scroll pa-10 rounded-3xl bg-primary-500 mt-10">
              {{ error }}
            </div>
          </DevOnly>
        </div>
      </section>
    </NuxtLayout>
  </section>
</template>

<script setup lang="ts">
const error = useError()

useHead({
  title: "La page n'existe pas"
})

// const { gtag } = useGtag()

// gtag('event', 'exception', {
//   description: `${error.statusCode}`
// })

/**
 * A function that handles the
 * redirect to the home page
 */
function handleError() {
  clearError({ redirect: '/' })
}
</script>
