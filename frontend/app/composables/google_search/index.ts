export * from './utils'

export interface SearchItem {
  id: string
  title: string
  description?: string
  slug: string
  type: 'product' | 'page' | 'content'
  to: string
  tags?: string[]
}

/**
 * Composable for implementing a search on Goole's search page. It allows users to search through 
 * a list of items based on their title, description, and tags. The search query is synchronized with 
 * the URL's search parameters, allowing for easy sharing and bookmarking of search results.
 * @param args Functions that return a list of SearchItems based on the search query.
 */
export function useGoogleSearch(...args: ((searchItem: string) => MaybeRefOrGetter<SearchItem>)[]) {
  const activeType = ref<'all' | 'product' | 'page' | 'content'>('all')

  const query = ref<string>('')
  const searchParams = useUrlSearchParams('history') as { q: string }

  watch(query, (newValue) => {
    searchParams.q = newValue
  })

  const allItems = computed(() => {
    return args.flatMap((func) => {
      return toValue(func(query.value))
    }).flatMap(x => x)
  })

  const searchedItems = computed(() => {
    if (query.value === '') {
      return allItems.value
    }

    const lowerQuery = query.value.toLowerCase()
    return allItems.value.filter(item =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description?.toLowerCase().includes(lowerQuery) ||
      item.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
    )
  })

  return {
    /**
     * The active type of items to display. It can be 'all', 'product', 
     * 'page', or 'content'. This can be used to filter the search results 
     * based on the type of items.
     */
    activeType,
    /**
     * The search query entered by the user. This is synchronized with the URL's
     * search parameters, allowing for easy sharing and bookmarking of search results.
     */
    query,
    /**
     * A computed property that returns all items from the provided functions based on the current search query.
     */
    allItems,
    /**
     * A computed property that returns the list of items that 
     * match the search query. It filters the items based on whether the 
     * title, description, or tags include the search query (case-insensitive). 
     * If the search query is empty, it returns all items.
     */
    searchedItems
  }
}
