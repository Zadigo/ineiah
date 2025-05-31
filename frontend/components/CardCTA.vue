<template>
  <ShadCard class="text-white bg-cover" style="background-image:url('/hero/hair7.jpg')">
    <ShadCardContent class="p-20">
      <div class="flex-col justify-center mx-auto text-center max-w-7xl">
        <h2 class="text-7xl text-shadow-brand-500 font-bold mb-5">
          <slot name="title">
            Prête à se sublimer
          </slot>
        </h2>

        <p class="text-light max-w-lg mx-auto">
          <slot>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit enim eu lorem placerat consequat fusce suspendisse ornare duis eget. Varius aliquet ad non fermentum sociosqu praesent litora dolor dapibus varius. Quisque pellentesque vivamus odio taciti risus rutrum ipsum lacus eleifend erat. Ornare congue mauris habitant vestibulum platea pretium feugiat pharetra primis dictumst. Blandit quam vestibulum ante class nec convallis orci etiam vestibulum netus. Phasellus laoreet faucibus vel ac natoque vel fermentum accumsan taciti enim.

            Velit orci quisque ad ipsum habitant curae ullamcorper potenti pretium quisque. Nec fermentum nec hac fringilla enim taciti arcu elementum auctor curabitur. Lacinia iaculis nisl luctus dictumst nisl nulla sit ultrices tempus eros. Consectetur et netus porta phasellus magnis erat phasellus metus justo dapibus. Quam cras at ligula laoreet faucibus ante scelerisque morbi proin duis. Sapien tortor aliquet turpis congue convallis parturient gravida curae iaculis lacinia. Id per habitasse a venenatis sed potenti platea odio arcu dictum.
          </slot>
        </p>

        <ShadButton :id="id" size="xl" class="rounded-full mt-10" as-child>
          <a href="tel:+33">
            <slot name="action">
              Obtenir mon moment plaisir
            </slot>
          </a>
        </ShadButton>
      </div>
    </ShadCardContent>
  </ShadCard>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    id: string
  }>(),
  {
    id: 'tel-offer-section'
  }
)
</script>
