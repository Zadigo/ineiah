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
    <section class="p-10">
      <coaching-pricing />
    </section>

  </section>
</template>
