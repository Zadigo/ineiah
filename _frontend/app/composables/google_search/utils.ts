/**
 * Helper function to resolve an array of objects into an array of SearchItems
 * using a provided mapping function.
 * @param obj The array of objects to be resolved.
 * @param mapper A function that maps each object to a SearchItem.
 */
export function objectResolver<T extends Record<string, unknown>>(objs: T[], mapper: (obj: T) => SearchItem): SearchItem[] {
  const _items = toValue(objs)
  const resolveditems: SearchItem[] = []

  for (const item of _items) {
    resolveditems.push(mapper(item))
  }

  return resolveditems
}

export function useGoogleSearchItems(items: ReturnType<typeof objectResolver>, searchFunc: (item: SearchItem, searchValue: string) => boolean) {
  const allItems = computed(() => {
    const _items = toValue(items)
    return _items.flatMap(item => item)
  })

  function resolve(query?: string) {
    const _query = toValue(query)

    if (!isDefined(_query) || _query === '') {
      return allItems.value
    }

    return items.filter(item => searchFunc(item, _query.toLowerCase()))
  }

  return {
    /**
     * A function that resolves the provided items based on the search query. 
     * It returns all items if the query is empty, or filters the items using the provided search function.
     */
    resolve
  }
}

export type ActiveType = 'all' | 'product' | 'page' | 'content'

export function useGoogleSearchComposable<T extends { activeType: Ref<ActiveType>, resolvers: ReturnType<typeof useGoogleSearchItems>[] }>(options: T) {
  const query = ref<string>('')
  const searchParams = useUrlSearchParams('history', { initialValue: { q: '' }, removeNullishValues: true })

  const loweredQuery = computed(() => query.value.toLowerCase())

  watch(query, (newValue) => {
    searchParams.q = newValue
  })

  const allItems = computed(() => {
    const items = options.resolvers.flatMap(resolver => resolver.resolve(loweredQuery.value))
    // const items = options.resolvers.flatMap(resolver => resolver.resolve(toValue(loweredQuery)))

    if (options.activeType.value === 'all') {
      return items
    } else {
      return items.filter(item => item.type === options.activeType.value)
    }
  })

  return {
    /**
     * The search query entered by the user. This is synchronized with the URL's
     * search parameters, allowing for easy sharing and bookmarking of search results.
     */
    query,
    /**
     * A computed property that returns all items from the provided resolvers based on the current search query.
     */
    allItems
  }
}
