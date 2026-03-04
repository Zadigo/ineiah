<template>
  <div class="my-5 md:p-10">
    <h3 class="text-center text-2xl font-bold text-primary-500 mb-5 md:mb-0">
      {{ $t('Nos marques partenaires') }}
    </h3>

    <p class="text-center text-primary-500">Je leur fais confiance pour leurs produits de qualité.</p>

    <div class="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-none md:p-10">
      <hero-brand src="/brands/Bouclème.png" alt="Logo de la marque Bouclème" />
      <hero-brand src="/brands/Bouclème.png" alt="Logo de la marque Bouclème" />
      <hero-brand src="/brands/Bouclème.png" alt="Logo de la marque Bouclème" />
      <hero-brand src="/brands/Bouclème.png" alt="Logo de la marque Bouclème" />
    </div>
  </div>
</template>
