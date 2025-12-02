<template>
  <client-only>
    <volt-dialog v-model:visible="show" class="w-200" title="Customize your cookie preferences">
      <p>We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website.</p>
      <cookie-block v-for="item in cookies" :key="item.name" :cookie-value="item" />
    </volt-dialog>
  </client-only>
</template>

<script setup lang="ts">
const show = defineModel('show', {
  type: Boolean,
  required: true
})

const cookies = ref([
  {
    name: 'Necessary Cookies',
    description: 'These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.',
    required: true
  },
  {
    name: 'Analytics Cookies',
    description: 'We use cookies to help us analyze our traffic. These cookies help us to improve our website and services.',
    required: false
  },
  {
    namee: 'Advertising Cookies',
    description: 'These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign.',
    required: false
  }
])
</script>
