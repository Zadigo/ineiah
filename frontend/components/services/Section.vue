<template>
  <div class="my-5">
    <h2 class="font-bold text-4xl px-4 mb-7 text-brand-500">
      Coupes
    </h2>

    <ShadScrollArea class="whitespace-nowrap">
      <div class="flex p-4 space-x-4 w-max">
        <ServicesCard v-for="i in 15" :key="i" />
      </div>
      <ShadScrollBar orientation="horizontal" />
    </ShadScrollArea>
  </div>
</template>
