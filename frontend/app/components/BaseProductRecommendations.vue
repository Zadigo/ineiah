<template>
  <section id="recommended-products" class="p-20">
    <h3 class="text-center text-3xl mb-10">Mes recommandations produits</h3>

    <div class="grid grid-cols-5 gap-5">
      <volt-card v-for="idx in 5" :key="idx" class="bg-surface-50">
        <template #content>
          <div class="grid grid-cols-2">
            <a href="https://fr.olaplex.com/collections/all-products-fr/products/rich-hydration-mask-eu" target="_blank" rel="noopener noreferrer">
              <img src="/products/product1.webp" alt="">
            </a>

            <div class="flex-row content-center">
              <h4>Product name</h4>
              <p class="font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="https://fr.olaplex.com/collections/all-products-fr/products/rich-hydration-mask-eu" target="_blank" rel="noopener noreferrer" class="text-primary-500 underline underline-offset-2 text-sm mt-2 inline-block">
                Voir le produit
              </a>
            </div>
          </div>
        </template>
      </volt-card>
    </div>
  </section>
</template>
