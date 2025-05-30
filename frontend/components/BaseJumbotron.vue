<template>
  <div ref="heroEl" class="w-full h-[60vh] bg-center bg-no-repeat bg-cover flex items-center md:items-end">
    <div id="lead" class="text-left text-white p-5 md:p-10">
      <h1 class="text-6xl md:text-7xl font-bold mb-5">{{ lead }}</h1>
      <p class="text-2xl font-normal">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  lead: string
  subtitle: string
  src: string
}>()

const heroEl = useTemplateRef('heroEl')

onMounted(() => {
  if (heroEl.value) {
    heroEl.value.style.backgroundImage = `url('${props.src}')`
  }
})
</script>
