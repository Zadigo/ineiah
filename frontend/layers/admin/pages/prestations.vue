<template>
  <section id="index" class="ps-[400px] space-y-2">
    <div class="grid grid-cols-12">
      <div class="col-span-12">
        <volt-button rounded>
          Ajouter
        </volt-button>
      </div>
    </div>

    <volt-card :pt="{ body: 'bg-surface-500' }">
      <template #content>
        <div class="flex justify-between items-center">
          <p class="font-bold">Prestation #1</p>

          <div class="space-x-2">
            <volt-button rounded>
              <icon name="i-fa7-solid:pencil" />
            </volt-button>

            <volt-button rounded>
              <icon name="i-fa7-solid:trash" />
            </volt-button>
          </div>
        </div>
      </template>
    </volt-card>

    <volt-card>
      <template #content>
        <div class="space-y-2">
          <div class="grid grid-cols-2 gap-2">
            <volt-input placeholder="Titre" />
            <volt-input placeholder="Sous-titre" />
          </div>

          <volt-input placeholder="Description" />

          <div class="max-w-150">
            <volt-input placeholder="Prix" />
          </div>

          <div class="p-5 bg-background rounded-lg">
            <div class="flex justify-between gap-2 items-center">
              <volt-input placeholder="Contenu de la prestation" />
              <volt-button size="lg" rounded>
                <ion name="i-fa7-solid:plus" />
              </volt-button>
            </div>
          </div>
        </div>
      </template>
    </volt-card>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Admin Prestations",
  layout: "admin"
})
</script>
