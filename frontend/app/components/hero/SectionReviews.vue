<template>
  <section class="px-5 py-20 md:p-20 text-primary-100 bg-primary-500">
    <div class="mb-10 text-center max-w-3xl mx-auto">
      <client-only>
        <h3 v-motion-slide-visible-once-bottom :delay="400" :enter="{ transition: { type: 'spring', stiffness: 20 } }" class="text-3xl xl:text-5xl mb-5">
          {{ $t("Ce que pensent mes clients") }}
        </h3>
      </client-only>

      <p>
        {{ $t("Voici ce que nos clients pensent de nous. Nous sommes toujours à la recherche de moyens pour nous améliorer. Si vous avez une expérience positive avec nous, laissez un avis.") }}
      </p>
    </div>

    <div class="flex flex-wrap justify-center text-left gap-5 xl:gap-10 text-primary-500">
      <article v-for="(review, idx) in reviews" :key="idx" class="flex flex-col justify-left shadow-md rounded-xl bg-primary-200 dark:bg-primary-800" @click="selectReview(review)">
        <div id="review" class="flex flex-col justify-between p-5 max-w-70">
          <div id="review-rating">
            <icon v-for="i in review.rating" :key="i" name="lucide:star" />
          </div>

          <div v-if="hasSelection && selectedReview.reviewer.name === review.reviewer.name" class="font-thin leading-5 text-sm w-full h-25 overflow-scroll" @click="selectReview(null)">
            "{{ review.comment }}"
          </div>

          <div v-else class="font-thin leading-5 text-sm w-full h-25 overflow-hidden text-ellipsis">
            "{{ review.comment }}"
          </div>

          <volt-divider />

          <div class="flex items-center space-x-5 mt-5">
            <nuxt-img :src="review.reviewer.avatar || '/placeholder2.svg'" size="large" class="w-10 h-10 rounded-full" />
            <div class="space-y-0">
              <h2 class="font-bold">{{ review.reviewer.name }}</h2>
              <p v-if="review.reviewer.title" class="text-sm font-thin">{{ review.reviewer.title }}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
/**
 * Reviews
 */

const { reviews, selectedReview, hasSelection, selectReview } = useReviewsComposable()

// const reviewEls = useTemplateRefsList()

// reviewEls.value.forEach((el) => {
//   onClickOutside(el, () => {
//     selectReview(null)
//   })
// })

/**
 * SEO
 */

useSchemaOrg(
  reviews.map(review => defineReview({
    author: {
      '@type': "Person",
      givenName: review.reviewer.givenName,
      familyName: review.reviewer.familyName
    },
    reviewBody: review.comment,
    reviewRating: {
      ratingValue: review.rating.toString(),
      bestRating: review.rating.toString(),
      worstRating: "1"
    }
  }))
)
</script>
