<template>
  <div class="p-10 md:p-20 bg-primary-500/60 backdrop-blur-xl backdrop-saturate-200 text-primary-700 dark:bg-primary-700 dark:text-primary-200 w-full text-center">
    <h1 class="text-2xl md:text-4xl max-w-4xl md:mx-auto font-bold space-x-2 md:space-x-5">
      <Icon name="fa-solid:quote-left" />
      <span>
        <slot />
      </span>
      <Icon name="fa-solid:quote-right" />
    </h1>
  </div>
</template>
