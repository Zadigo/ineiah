<template>
  <div class="my-5">
    <p class="font-bold">{{ cookieValue.name }}</p>

    <div class="grid grid-cols-8 items-center py-5">
      <div class="col-span-6">
        <p class="mb-2 text-sm">
          {{ cookieValue.description }}
        </p>
      </div>

      <div class="col-span-2">
        <volt-toggle-switch v-model="cookie.required" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  cookieValue: {
    name: string
    description: string
    required: boolean
  }
}>()

const cookie = computed({
  get: () => props.cookieValue,
  set: (value) => {
    useCookie(props.cookieValue.name).value = value.required ? 'true' : 'false'
  }
})
</script>
