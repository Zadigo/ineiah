<template>
  <volt-card class="bg-surface-500/10 has-[p]:leading-8">
    <template #content>
      <div class="grid md:grid-rows-1 md:grid-cols-2 gap-10">
        <div v-show="!invert">
          <img src="/hero/hair10.jpg" class="aspect-square object-cover rounded-lg" alt="Anissa en action">
        </div>

        <!-- mt-5 md:mt-0 md:max-w-lg has-[p]:space-y-3 -->
        <div class="flex md:max-w-xl mx-auto md:justify-center md:items-center">
          <div>
            <h3 class="font-semibold text-5xl mb-5 text-primary-500 dark:text-primary-200 font-title leading-15">
              Une <span class="italic text-primary-700 dark:text-primary-300">expertise</span> façonnée par l'experience
            </h3>

            <p>
              Quand Anissa découvre la coiffure grâce à la fibre familiale, c'est une révélation et un univers aux multiples facettes qui s'offrent à elle.
            </p>

            <p>
              Le reste, durant plus de 12 ans se conjuguera par des rencontres, des expériences des grands salons parisiens, où elle façonne son regard sur la coiffure qu'elle personnalise à tous les types de cheveux.
            </p>

            <p>
              Des grands défilés de Mode, shooting d'édito en passant par divers partenariats, la vision d'Anissa s'éguise et l'idée d'un lieu cosy où ses idées artistiques prennent vie se fait sentir !
            </p>
          </div>
        </div>

        <div v-show="invert" class="rounded-md">
          <img src="/hero/hair10.jpg" class="aspect-square object-cover rounded-md" alt="Anissa en action">
        </div>
      </div>
    </template>
  </volt-card>
</template>

<script setup lang="ts">
const { invert = false } = defineProps<{ invert?: boolean }>() 
</script>
