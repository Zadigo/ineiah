<template>
  <admin-edition-card :block-title="blockTitle">
    <template #default>
      <volt-fluid>
        <volt-input-text placeholder="Title" />

        <volt-fieldset legend="Header">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </volt-fieldset>
      </volt-fluid>

      <div v-if="richText" id="quill" />
      <volt-input-text v-else placeholder="Description" />
      <volt-input-text type="file" placeholder="Image" />
    </template>
  </admin-edition-card>
</template>

<script setup lang="ts">
const { blockTitle, richText = false } = defineProps<{ blockTitle: string, richText?: boolean }>()
</script>
