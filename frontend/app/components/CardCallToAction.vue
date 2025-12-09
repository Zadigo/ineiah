<template>
  <div class="bg-center bg-cover bg-no-repeat rounded-lg overflow-hidden" :style="{ backgroundImage: `url(/hero/hair11.jpg)` }">
    <div class="p-8 text-primary-100 dark:text-primary-50 md:p-20">
      <div class="flex-col justify-center mx-auto text-center max-w-7xl">
        <h2 class="text-5xl md:text-7xl font-bold mb-5 font-title">
          <slot name="title">
            Prête à se sublimer
          </slot>
        </h2>

        <p class="font-light max-w-lg mx-auto">
          <slot>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit enim eu lorem placerat consequat fusce
            suspendisse ornare duis eget. Varius aliquet ad non fermentum sociosqu praesent litora dolor dapibus varius.
            Quisque pellentesque vivamus odio taciti risus rutrum ipsum lacus eleifend erat. Ornare congue mauris habitant
            vestibulum platea pretium feugiat pharetra primis dictumst. Blandit quam vestibulum ante class nec convallis
            orci etiam vestibulum netus. Phasellus laoreet faucibus vel ac natoque vel fermentum accumsan taciti enim.
          </slot>
        </p>
        
        <slot name="cta">
          <base-telephone-button :id="id" size="large" class="mt-10" :with-icon="true">
            <template #default>
              <slot name="ctaName">
                Obtenir mon moment plaisir
              </slot>
            </template>
          </base-telephone-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { id = 'tel-offer-section' } = defineProps<{ id?: string }>()
</script>
