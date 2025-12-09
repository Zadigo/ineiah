<template>
  <section id="coaching" class="has-[p]:space-y-5 has-[p]:leading-8 has-[h2]:leading-15 relative">
    <!-- Hero -->
    <hero-top-image>
      <template #lead>
        Coaching personnalisé
      </template>

      <template #leadDescription>
        Découvrez nos services de coaching sur mesure pour vous aider à atteindre vos objectifs personnels et professionnels.
      </template>

      <template #cta>
        <volt-button>
          En savoir plus
        </volt-button>
      </template>
    </hero-top-image>

    <!-- Pricing -->
    <base-section-container>
      <div class="text-center mt-10 mb-15">
        <h2 class="text-4xl font-bold">Tarifs coaching personnalisés</h2>
        <p>Choisissez le plan qui correspond le mieux à vos besoins et commencez votre parcours de coaching dès aujourd'hui.</p>
      </div>

      <coaching-pricing />
    </base-section-container>

    <!-- Call to Action -->
    <base-section-container>
      <card-call-to-action id="coaching-cta">
        <template #title>
          Prêt à transformer votre vie ?
        </template>
        
        <p>
          Nos coachs experts sont là pour vous guider à chaque étape de votre parcours. Ne laissez pas passer cette opportunité de croissance personnelle et professionnelle.
        </p>
      </card-call-to-action>
    </base-section-container>
  </section>
</template>
