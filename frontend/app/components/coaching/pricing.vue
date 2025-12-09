<template>
  <div class="flex flex-wrap items-center justify-center gap-6">
    <template v-for="(section, idx) in pricingSections" :key="idx">
      <div v-if="!section.hihlighted" class="w-72 bg-primary-50 text-center text-gray-800/80 border border-primary-200 p-6 pb-16 rounded-lg">
        <p class="font-semibold">{{ section.name }}</p>
        <h1 class="text-3xl font-semibold">{{ section.price }}€<span class="text-gray-500 text-sm font-normal">/month</span></h1>
        <ul class="list-none text-gray-500 text-sm mt-6 space-y-1">
          <li v-for="feature in section.features" :key="feature" class="flex items-center gap-2">
            <icon name="lucide:check" />
            <p>{{ feature }}</p>
          </li>
        </ul>

        <volt-button class="mt-7 w-full" rounded>
          {{ section.buttonName }}
        </volt-button>
      </div>
      
      <div v-else class="w-72 bg-tertiary-500 relative text-center text-tertiary-50 border border-gray-500/30 p-6 pb-14 rounded-lg">
        <p class="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-tertiary-600 rounded-full">Most Popular</p>
        <p class="font-semibold pt-2">{{ section.name }}</p>
        <h1 class="text-3xl font-semibold">{{ section.price }}€<span class="text-sm font-normal">/month</span></h1>
        <ul class="list-none text-tertiary-50 text-sm mt-6 space-y-1">
          <li v-for="feature in section.features" :key="feature" class="flex items-center gap-2">
            <icon name="lucide:check" />
            <p>{{ feature }}</p>
          </li>
        </ul>

        <volt-button class="mt-7 w-full" rounded>
          {{ section.buttonName }}
        </volt-button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
interface CoachingPricingSection {
  name: string
  price: string
  features: string[]
  buttonName: string
  hihlighted?: boolean
}

const pricingSections: CoachingPricingSection[] = [
  {
    name: 'Basic',
    price: '29',
    features: [
      'Access to all basic courses',
      'Community support',
      '10 practice projects',
      'Course completion certificate',
      'Basic code review',
    ],
    buttonName: 'Get Started',
  },
  {
    name: 'Pro',
    price: '79',
    features: [
      'Access to all Pro courses',
      'Priority community support',
      '30 practice projects',
      'Course completion certificate',
      'Advance code review',
      '1-on-1 mentoring sessions',
      'Job assistance',
    ],
    buttonName: 'Get Started',
    hihlighted: true,
  },
  {
    name: 'Enterprise',
    price: '199',
    features: [
      'Access to all courses',
      'Dedicated support',
      'Unlimited projects',
      'Course completion certificate',
      'Premium code review',
      'Weekly 1-on-1 mentoring',
      'Job guarantee',
    ],
    buttonName: 'Get Started',
  },
]
</script>
