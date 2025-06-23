interface CustomDirectiveBinding extends DirectiveBinding {
  value: boolean
  arg?: 'left' | 'right' | undefined
}

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('text-slide', {
    mounted(el: HTMLElement, binding: CustomDirectiveBinding) {
      const baseTokens = ['animate-in', 'fade-in-50', 'duration-500']

      if (binding.arg === 'left') {
        baseTokens.push('slide-in-from-left-5')
      }

      if (binding.arg === 'right') {
        baseTokens.push('slide-in-from-right-5')
      }
      console.log(binding)
      if (binding.value) {
        el.classList.add(...baseTokens)
      } else {
        el.classList.remove(...baseTokens)
      }
    }
  })
})
