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

    <!-- Intermediate - 1 -->
    <base-section-container>
      <base-section-simple-card image="/hero/hair10.jpg" image-alt="Coaching professionnel" :invert="true">
        <template #title>
          Qu'est-ce que le coaching personnalisé ?
        </template>

        <template #default>
          <p>
            Le coaching personnalisé est un processus d'accompagnement individuel visant à aider les personnes à atteindre leurs objectifs spécifiques. Grâce à des sessions de coaching adaptées, nos coachs professionnels travaillent avec vous pour identifier vos besoins, surmonter les obstacles et développer des stratégies efficaces pour réussir.
          </p>
        </template>  
      </base-section-simple-card>
    </base-section-container>
    
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
          Des questions ?
        </template>
        
        <p>
          N'hésitez pas à nous contacter pour en savoir plus sur nos offres de coaching personnalisé et comment nous pouvons vous aider à atteindre vos objectifs.
        </p>

        <template #cta>
          <volt-button>
            Contactez-nous
          </volt-button>
        </template>
      </card-call-to-action>
    </base-section-container>
  </section>
</template>
