<template>
  <div class="my-5 md:p-10">
    <h3 class="text-center text-2xl font-bold text-primary-500 mb-5 md:mb-0">
      {{ $t('Nos marques partenaires') }}
    </h3>

    <p class="text-center text-primary-500">
      Des marques sélectionnées pour leur excellence sur cheveux bouclés,
      crépus et texturés.
    </p>

    <div class="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-none md:p-10">
      <hero-brand src="/brands/Bouclème.png" alt="Bouclème — Soin spécialisé cheveux bouclés et ondulés" />
      <hero-brand src="/brands/olaplex.svg" alt="Olaplex — Traitement réparateur cheveux abîmés et colorés" />
      <hero-brand src="/brands/les_secrets_de_loly.png" alt="Les Secrets de Loly — Soins naturels cheveux afros et crépus" />
      <hero-brand src="/brands/vegetalement_provence/vegetalement_provence.png" alt="Végétalement Provence — Kératine végétale et soins naturels cheveux" />
    </div>
  </div>
</template>
