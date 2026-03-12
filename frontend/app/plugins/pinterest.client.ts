export default defineNuxtPlugin({
  name: 'pinterest',
  parallel: true,
  async setup() {
    useHead({
      meta: [
        {
          name: 'p:domain_verify',
          content: '4fe3486c456fa2f68f9f31cab6823a51',
          crossorigin: 'anonymous'
        }
      ]
    })
  }
})
