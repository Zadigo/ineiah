import type { Nullable, ServiceSection } from '~/types'
import { defaultServices } from './items'

export function useServices() {
  const services = ref<ServiceSection[]>(defaultServices)

  function resolver(index: number, item: ServiceSection, query?: string) {
    return item.services.map(item => ({
      id: `${index}`,
      title: `${item.category} - ${item.name} - ${item.gender}`,
      description: item.description,
      slug: item.name?.replace(' ', '-').toLowerCase(),
      type: 'product',
      to: `/nos-prestations?q=${query}`,
      tags: []
    } as SearchItem))
  }

  function googleSearchResolver(searchedValue: Nullable<string>) {
    if (isDefined(searchedValue)) {
      const searchedItem = searchedValue.toLowerCase()
      return services.value.filter((service) => {
        return (
          service.name.toLowerCase().includes(searchedItem) ||
          service.globalDescription?.toLowerCase().includes(searchedItem) ||
          service.services.map(item => {
            return (
              item.name?.toLowerCase().includes(searchedItem) ||
              item.gender.toLocaleUpperCase().includes(searchedItem) ||
              `${item.price?.toString()}€`.includes(searchedItem) ||
              item.priceText?.toLowerCase().includes(searchedItem) ||
              item.category.toLowerCase().includes(searchedItem) ||
              item.description?.toLowerCase().includes(searchedItem) ||
              item.includes.some(x => x.toLowerCase().includes(searchedItem))
            )
          }).some(x => x === true)
        )
      }).map((item, idx) => resolver(idx, item))
    } else {
      return []
    }
  }

  return {
    /**
     * The list of service sections available. Each section contains a name, 
     * a list of services, a global description, and a list of included items. 
     * This can be used to display the services offered by the business and to 
     * perform searches based on the service details.
     */
    services,
    /**
     * Resolver function for the Google search. It takes the searched value as 
     * an argument and returns a list of SearchItems that match the searched value. The search 
     * is performed on the service name, global description, and individual service details.
     */
    googleSearchResolver
  }
}
