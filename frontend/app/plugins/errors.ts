export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.config.errorHandler = (_error, _instance, _info) => {
    if (import.meta.client) {
      // const { sendEvent } = useAnalyticsEvent()

      // sendEvent(
      //   defineAnalyticsEvent('exception', {
      //     fatal: false,

      //     // @ts-ignore
      //     description: `${error.message} at ${info}`
      //   })
      // )
    }
  }
})
