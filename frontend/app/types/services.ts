export type ServiceNames = 'Shampoings coupes coiffage' | 'Soins et traitements'

export type ServiceCategory = 'Coupe'

export interface Service {
  /**
   * Name of the service
   */
  name: string
  /**
   * Gender
   */
  gender: 'Femme' | 'Homme'
  /**
   * Price of the service in euros
   */
  price: number
  /**
   * Brief description of the service
   */
  description: string
  /**
   * Detailed description of the actions that will be
   * performed during the service. This is a specific
   * attribute for each service
   */
  includes: string[]
  /**
   * Duration of the service in minutes
   */
  duration?: number
  /**
   * Illustration image URL for the service
   */
  illustration?: string
}

export interface ServiceSection {
  /**
   * The name of the package
   */
  name: ServiceNames
  /**
   * The list of services included in the package
   */
  services: Service[]
  /**
   * Detailed description of the actions that will be
   * performed during the service. This a global attribute
   * that can be used to provide more context for all the
   * services within the package
   */
  includes?: string[]
}
