import { describe, expect, it } from 'vitest'
import { objectResolver, defineSearchResolver, googleSearchTitleHelper, useGoogleSearchComposable } from '~/composables/google_search'


const products: { id: string, name: string }[] = [
  { id: '1', name: 'Product A' },
  { id: '2', name: 'Product B' },
  { id: '3', name: 'Product C' }
]

const services: { id: string, name: string }[] = [
  { id: '1', name: 'Service A' },
  { id: '2', name: 'Service B' },
  { id: '3', name: 'Service C' }
]

describe('Google Search: ObjectResolver', () => {
  it('should resolve an array of objects to SearchItem', () => {
    const searchItems = objectResolver(products, (product) => ({
      id: product.id,
      title: product.name,
      type: 'product',
      slug: product.id,
      to: `/products/${product.id}`,
      description: `Description for ${product.name}`,
      tags: []
    }))

    expect(searchItems).toHaveLength(products.length)
    expect(searchItems[0]).toHaveProperty('id', '1')
    expect(searchItems[0]).toHaveProperty('title', 'Product A')
    expect(searchItems[0]).toHaveProperty('type', 'product')
    expect(searchItems[0]).toHaveProperty('slug', '1')
    expect(searchItems[0]).toHaveProperty('to', '/products/1')
    expect(searchItems[0]).toHaveProperty('description', 'Description for Product A')
    expect(searchItems[0]).toHaveProperty('tags', [])
  })
})

type TestCase = {
  title: string
  searchValue: string | undefined
  expectedResultLength: number
  activeType?: 'all' | 'product' | 'page' | 'content'
}

describe('Google Search: DefineSearchResolver', () => {
  const testCases: TestCase[] = [
    {
      title: 'should return all items when search query is empty',
      searchValue: '',
      expectedResultLength: products.length
    },
    {
      title: 'should return all items when search query is undefined',
      searchValue: undefined,
      expectedResultLength: products.length
    },
    {
      title: 'should return filtered items based on search query',
      searchValue: 'Product A',
      expectedResultLength: 1
    },
    {
      title: 'should return no items when search query does not match any item',
      searchValue: 'Non-existent Product',
      expectedResultLength: 0
    }
  ]

  testCases.forEach(({ title, searchValue, expectedResultLength }) => {
    it(title, () => {
      const result = defineSearchResolver(
        objectResolver(products, (product) => ({
          id: product.id,
          title: product.name,
          type: 'product',
          slug: product.id,
          to: `/products/${product.id}`,
          description: `Description for ${product.name}`,
          tags: []
        })),
        (item, searchValue) => searchValue ? item.title.toLowerCase().includes(searchValue.toLowerCase()) : true
      )

      expect(result).toHaveProperty('resolve')
      expect(typeof result.resolve).toBe('function')

      const resolvedItems = result.resolve(searchValue)
      expect(resolvedItems).toHaveLength(expectedResultLength)
    })
  })
})

describe('Google Search: UseGoogleSearchComposable', () => {
  const testCases: TestCase[] = [
    {
      title: 'should return all items when search query is empty',
      searchValue: '',
      expectedResultLength: products.length + services.length
    },
    {
      title: 'should return all items when search query is undefined',
      searchValue: undefined,
      expectedResultLength: products.length + services.length
    },
    {
      title: 'should return filtered items based on search query',
      searchValue: 'Product A',
      expectedResultLength: 1
    },
    {
      title: 'should return filtered items based on search query for services',
      searchValue: 'Service B',
      expectedResultLength: 1
    },
    {
      title: 'should return products within the active type filter if present',
      searchValue: 'A',
      expectedResultLength: 1,
      activeType: 'product'
    }
  ]

  testCases.forEach(({ title, searchValue, expectedResultLength, activeType }) => {
    it(title, () => {
      const resolvedProducts = objectResolver(products, (product) => ({
        id: product.id,
        title: product.name,
        type: 'product',
        slug: product.id,
        to: `/products/${product.id}`,
        description: `Description for ${product.name}`,
        tags: []
      }))
      
      const resolvedServices = objectResolver(services, (service) => ({
        id: service.id,
        title: service.name,
        type: 'content',
        slug: service.id,
        to: `/services/${service.id}`,
        description: `Description for ${service.name}`,
        tags: []
      }))
  
      const { allItems, query } = useGoogleSearchComposable({
        activeType: ref(activeType || 'all'),
        resolvers: [
          defineSearchResolver(resolvedProducts, googleSearchTitleHelper),
          defineSearchResolver(resolvedServices, googleSearchTitleHelper)
        ]
      })
  
      if (activeType) {
        expect(toValue(allItems)).toHaveLength(3)
      } else {
        expect(toValue(allItems)).toHaveLength(products.length + services.length)
      }
      
      query.value = searchValue || ''
      expect(toValue(allItems)).toHaveLength(expectedResultLength)
    })
  })
})

type SearchTestCase = {
  title: string
  searchValue: string
  expectedResult: boolean
}

describe('Google Search: GoogleSearchTitleHelper', () => {
  const testCases: SearchTestCase[] = [
    {
      title: 'should return true if the search value is found in the item title',
      searchValue: 'Product',
      expectedResult: true
    },
    {
      title: 'should return true if the search value is found in the item title (case insensitive)',
      searchValue: 'product',
      expectedResult: true
    },
    {
      title: 'should return true if the search value is found in the item title (partial match)',
      searchValue: 'A',
      expectedResult: true
    },
    {
      title: 'should return false if the search value is not found in the item title',
      searchValue: 'Non-existent',
      expectedResult: false
    },
    {
      title: 'should return false if the search value is empty',
      searchValue: '',
      expectedResult: false
    },
    {
      title: 'should return false if the search value is a single character not in the title',
      searchValue: 'a',
      expectedResult: true
    }
  ]

  testCases.forEach(({ title, searchValue, expectedResult }) => {
    it(title, () => {
      const item: SearchItem = {
        id: '1',
        title: 'Product A',
        type: 'product',
        slug: '1',
        to: '/products/1',
        description: 'Description for Product A',
        tags: []
      }
      
      const result = googleSearchTitleHelper(item, searchValue)
      expect(result, `Expected "${searchValue}" to be in "${item.title}"`).toBe(expectedResult)
    })
  })
})
