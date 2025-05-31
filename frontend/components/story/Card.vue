<template>
  <ShadCard class="bg-brand/20 has-[p]:leading-8">
    <ShadCardContent>
      <!-- flex-col text-center md:flex-row md:justify-around md:gap-20 md:items-center -->
      <div class="grid grid-rows-2 grid-cols-none md:grid-cols-2 md:grid-rows-none auto-cols-min gap-10">
        <div v-show="!invert">
          <NuxtImg src="/hero/hair8.jpg" class="aspect-square object-cover rounded-lg" />
        </div>

        <!-- mt-5 md:mt-0 md:max-w-lg has-[p]:space-y-3 -->
        <div class="flex md:justify-center md:items-center">
          <div>
            <h3 class="font-semibold text-5xl mb-5 text-brand-500 font-title leading-15">
              Une <span class="italic text-brand-200">expertise</span> façonnée par l'experience
            </h3>
            
            <p>
              Quand Anissa découvre la coiffure grâce à la fibre familiale, c’est une révélation et un univers aux multiples facettes qui s’offrent à elle.
            </p>
            
            <p>
              Le reste, durant plus de 12 ans se conjuguera par des rencontres, des expériences des grands salons parisiens, où elle façonne son regard sur la coiffure qu’elle personnalise à tous les types de cheveux.
            </p>
            
            <p>
              Des grands défilés de Mode, shooting d’édito en passant par divers partenariats, la vision d’Anissa s’éguise et l’idée d’un lieu cosy où ses idées artistiques prennent vie se fait sentir !
            </p>
          </div>
        </div>

        <div v-show="invert" class="rounded-md">
          <NuxtImg src="/hero/hair8.jpg" class="aspect-square object-cover rounded-md" />
        </div>
      </div>
    </ShadCardContent>
  </ShadCard>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  invert?: boolean
}>(), {
  invert: false
})
</script>
