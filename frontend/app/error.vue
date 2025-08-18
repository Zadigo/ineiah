<template>
  <section class="font-sans bg-brand-brown-500/20 relative">
    <NuxtLayout>
      <section class="error-page my-20">
        <div class="mx-auto md:max-w-2xl">
          <ShadCard class="border-none shadow-sm">
            <ShadCardContent>
              <h1 class="font-5xl">{{ error?.statusCode }}</h1>
              <p class="font-2xl text-light">{{ error?.message }}</p>
            
              <NuxtLinkLocale id="link-error" href="/" @click="handleError">
                {{ 'Accueil' }}
              </NuxtLinkLocale>
            </ShadCardContent>
          </ShadCard>

          <DevOnly>
            <div class="text-wrap overflow-y-scroll pa-10 rounded-3xl bg-brand-brown-500 mt-10">
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
