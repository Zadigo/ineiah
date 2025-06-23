<template>
  <NuxtLayout>
    <section class="error-page my-10">
      <div class="mx-auto md:max-w-2xl">
        <ShadCard class="card border-none shadow-sm">
          <ShardCardContent>
            <h1>{{ error?.statusCode }}</h1>
            <p class="text-wrap">{{ error?.message }}</p>
          
            <NuxtLinkLocale id="link-shop-error" href="/" @click="handleError">
              {{ $t('Accueil') }}
            </NuxtLinkLocale>
          </ShardCardContent>
        </ShadCard>

        <DevOnly>
          <div class="text-wrap overflow-y-scroll pa-10 rounded-3xl bg-brand-pink-700 mt-10">
            {{ error }}
          </div>
        </DevOnly>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const error = useError()

useHead({
  title: "La page n'exist pas"
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

<style lang="scss" scoped>
h1 {
  font-size: 4rem;
  font-weight: 800;
}
</style>
