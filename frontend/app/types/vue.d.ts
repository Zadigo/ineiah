import 'vue-router'

export { }

declare module 'vue-router' {
  interface RouteMeta {
    label?: 'Home' | 'Our Story' | 'Services' | 'Gallery' | 'FAQ' | 'Contact' | 'Privacy' | 'Terms and Conditions'
  }
}
