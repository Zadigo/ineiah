<template>
  <site id="admin">
    <div class="grid grid-cols-12 relative">
      <div class="col-span-2 relative">
        <div class="h-screen fixed top-0 left-0 z-50 bg-primary-50">
          Sidebar
        </div>
      </div>

      <div class="col-span-10 p-5">
        <div class="max-w-5xl mx-auto">
          <slot />
        </div>
      </div>
    </div>
  </site>
</template>
