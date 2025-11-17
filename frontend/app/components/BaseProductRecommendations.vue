<template>
  <section id="recommended-products" class="px-5 py-20 md:p-20">
    <h3 class="text-center text-3xl mb-10">Mes recommendations produits</h3>

    <div class="grid grid-rows-5 md:grid-rows-1 md:grid-cols-5 gap-5">
      <volt-card v-for="idx in 5" :key="idx" class="bg-surface-50">
        <template #content>
          <div class="grid grid-cols-2">
            <a href="https://fr.olaplex.com/collections/all-products-fr/products/rich-hydration-mask-eu" target="_blank" rel="noopener noreferrer">
              <img src="/products/product1.webp" alt="">
            </a>

            <div class="flex-row content-center">
              <h4 class="font-semibold">Nom produit</h4>
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
