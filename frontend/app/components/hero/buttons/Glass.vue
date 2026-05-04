<template>
  <div class="bg-primary-500/70 backdrop-saturate-150 backdrop-blur-sm border-primary-100 px-10 py-5 rounded-xl w-full min-w-80 xl:min-w-100 font-bold relative text-2xl transition ease-in-out duration-300 xl:hover:scale-105">
    {{ $t(text) }}

    <div class="rounded-full bg-primary-200/20 absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-primary-50 text-sm">
      <icon :name="iconName" :alt="iconName" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ 
  text: string, 
  iconName: string
  }>()
</script>
