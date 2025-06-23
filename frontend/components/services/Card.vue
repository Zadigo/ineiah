<template>
  <ShadCard class="p-0 relative cursor-pointer" @click="() => showServiceDetails=!showServiceDetails" @mouseenter="() => showIndicatorPhrase=true" @mouseleave="() => showIndicatorPhrase=false">
    <ShadCardContent v-if="!showServiceDetails" class="p-0 rounded-lg">
      <NuxtImg src="/hero/hair8.jpg" class="aspect-square object-cover rounded-lg w-[300px]" alt="" />

      <div class="absolute bottom-0 left-0 p-5 text-white">
        <p class="text-light text-sm">Coupe sur</p>
        <p class="font-semibold uppercase">cheveux sec . <span class="font-bold">120€</span></p>

        <Transition enter-active-class="animate zoom-in-10" leave-active-class="animate zoom-out-10">
          <p v-if="showIndicatorPhrase">En savoir plus</p>
        </Transition>
      </div>
    </ShadCardContent>

    <ShadCardContent class="service h-[300px] w-[300px] overflow-x-hidden text-wrap text-lightp p-8 text-sm bg-brand-pink-500/50 rounded-lg" v-else>
      <p class="mb-5 font-light">
        Rafraîchissez votre coupe et donnez-lui un coup de fraîcheur avec la restructuration, 
        qui vous apportera forme et volume en quelques coups de ciseaux ! La coupe sur cheveux secs permet de 
        rééquilibrer les volumes, la longueur et le style de la coupe (faire une frange, couper les pointes…)
      </p>
      
      <h4 class="font-bold mb-5">Contenu de la prestation</h4>
      <ul class="has-[li]:space-y-1">
        <li class="list-disc list-inside">Diagnostic / Conseils</li>
        <li class="list-disc list-inside">Coupe sur cheveux secs</li>
        <li class="list-disc list-inside">Routine sur-mesure au bac et son soin profond + massage</li>
        <li class="list-disc list-inside">Coiffage (brushing ou séchage naturel)</li>
      </ul>

      <ShadButton id="tel-service-xyz" class="mt-3 rounded-full" size="sm" as-child>
        <a href="tel:+33">
          <Icon name="fa-solid:phone" />
          Réserver
        </a>
      </ShadButton>
    </ShadCardContent>
  </ShadCard>
</template>

<script setup lang="ts">
const showIndicatorPhrase = ref<boolean>(false)
const showServiceDetails = ref<boolean>(false)

const isMobile = inject<boolean>('isMobile')
</script>

<style lang="scss" scoped>
.service::-webkit-scrollbar {
  display: none;
}
</style>
