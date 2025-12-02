<template>
  <admin-edition-card block-title="Photocall">
    <template #default>
      <volt-fluid>
        <div v-for="(item, index) in items" :key="index" class="flex justify-around space-y-2 gap-2">
          <volt-input-text v-model="item.title" placeholder="Title" />
          <volt-input-text v-model="item.subtitle" placeholder="Subtitle" />
          <volt-input-text v-model="item.image" type="file" />
        </div>
      </volt-fluid>
    </template>
  </admin-edition-card>
</template>

<script setup lang="ts">
const items = ref([
  {
    title: "",
    subtitle: "",
    image: null
  },
  {
    title: "",
    subtitle: "",
    image: null
  },
  {
    title: "",
    subtitle: "",
    image: null
  },
  {
    title: "",
    subtitle: "",
    image: null
  }
])
</script>
