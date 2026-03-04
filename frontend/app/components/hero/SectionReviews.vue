<template>
  <section class="px-5 py-20 md:p-20 text-primary-100 bg-primary-500">
    <div class="mb-10 text-center max-w-3xl mx-auto">
      <h3 class="text-3xl xl:text-5xl mb-5">
        {{ $t("Ce que pensent mes clients") }}
      </h3>

      <p>
        {{ $t("Voici ce que nos clients pensent de nous. Nous sommes toujours à la recherche de moyens pour nous améliorer. Si vous avez une expérience positive avec nous, laissez un avis.") }}
      </p>
    </div>

    <div class="flex flex-wrap justify-center text-left gap-5 xl:gap-10 text-primary-500">
      <article v-for="(review, idx) in reviews" :key="idx" class="flex flex-col justify-left shadow-md rounded-xl bg-primary-200 dark:bg-primary-800">
        <div id="review" class="flex flex-col p-5 max-w-70">
          <div id="review-rating">
            <icon v-for="i in review.rating" :key="i" name="lucide:star" />
          </div>

          <p class="font-thin leading-5 text-sm">
            "{{ review.comment }}"
          </p>

          <volt-divider />

          <div class="flex items-center space-x-5 mt-5">
            <volt-avatar :image="review.reviewer.avatar" size="large" />
            <div>
              <h2 class="font-bold">{{ review.reviewer.name }}</h2>
              <p class="text-sm font-thin">{{ review.reviewer.title }}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
function useReviews() {
  return {
    reviews: [
      {
        rating: 5,
        comment: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        reviewer: {
          name: "Johanna Gantois",
          title: "CEO, Company Name",
          avatar: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png"
        }
      },
      {
        rating: 5,
        comment: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        reviewer: {
          name: "Johanna Gantois",
          title: "CEO, Company Name",
          avatar: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png"
        }
      },
      {
        rating: 5,
        comment: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        reviewer: {
          name: "Johanna Gantois",
          title: "CEO, Company Name",
          avatar: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png"
        }
      },
      {
        rating: 5,
        comment: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        reviewer: {
          name: "Johanna Gantois",
          title: "CEO, Company Name",
          avatar: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png"
        }
      }
    ]
  }
}

const { reviews } = useReviews()

/**
 * SEO
 */

useSchemaOrg(
  reviews.map(review => defineReview({
    reviewBody: review.comment,
    reviewRating: {
      ratingValue: review.rating.toString(),
      bestRating: review.rating.toString(),
      worstRating: "1"
    }
  }))
)
</script>
