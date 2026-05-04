import type { ServiceSection } from '~/types'
import { defaultServices } from './items'

export function useServices() {
  const services = ref<ServiceSection[]>(defaultServices)

  return {
    /**
     * The list of service sections available. Each section contains a name,
     * a list of services, a global description, and a list of included items.
     * This can be used to display the services offered by the business and to
     * perform searches based on the service details.
     */
    services
  }
}
