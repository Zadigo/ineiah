<template>
  <volt-card :style="bgStyle">
    <template #content>
      <div class="p-8 text-primary-100 dark:text-primary-50 md:p-20">
        <div class="flex-col justify-center mx-auto text-center max-w-7xl">
          <h2 class="text-5xl md:text-7xl font-bold mb-5 font-title">
            <slot name="title">
              Prête à se sublimer
            </slot>
          </h2>

          <p class="text-light max-w-lg mx-auto">
            <slot>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit enim eu lorem placerat consequat fusce
              suspendisse ornare duis eget. Varius aliquet ad non fermentum sociosqu praesent litora dolor dapibus varius.
              Quisque pellentesque vivamus odio taciti risus rutrum ipsum lacus eleifend erat. Ornare congue mauris habitant
              vestibulum platea pretium feugiat pharetra primis dictumst. Blandit quam vestibulum ante class nec convallis
              orci etiam vestibulum netus. Phasellus laoreet faucibus vel ac natoque vel fermentum accumsan taciti enim.
            </slot>
          </p>

          <base-telephone-button :id="id" size="large" class="mt-10" :with-icon="true">
            <template #default>
              Obtenir mon moment plaisir
            </template>
          </base-telephone-button>
        </div>
      </div>
    </template>
  </volt-card>
</template>

<script setup lang="ts">
const { id = 'tel-offer-section' } = defineProps<{ id?: string }>()

const bgStyle = ref({
  backgroundImage: "url('/hero/hair11.jpg')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
})
</script>
