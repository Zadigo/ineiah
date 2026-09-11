/**
 * Helper function to resolve an array of objects into an array of SearchItems
 * using a provided mapping function.
 * @param objs The array of objects to be resolved.
 * @param fn A function that maps each object to a SearchItem.
 */
export function objectResolver<T>(objs: MaybeRefOrGetter<T[]>, fn: (obj: T) => SearchItem): SearchItem[] {
  const _items = toValue(objs)
  const resolveditems: SearchItem[] = []

  for (const item of _items) {
    resolveditems.push(fn(item))
  }

  return resolveditems
}

/**
 * Function that creates a resolver that defines a specific search behavior 
 * for a given set of items. It takes an array of SearchItems and a search 
 * function, and returns an object with a resolve method that filters the items based 
 * on the search query.
 * @param items The array of SearchItems to be resolved.
 * @param searchFn A function that defines how to filter the items based on the search query.
 */
export function defineSearchResolver(items: ReturnType<typeof objectResolver>, searchFn: (item: SearchItem, searchValue: string) => boolean) {
  const allItems = computed(() => toValue(items).flatMap(item => item))

  function resolve(query?: MaybeRefOrGetter<string>) {
    const _query = toValue(query)

    if (!isDefined(_query) || _query === '') return allItems.value

    // Use searchFn which contains the logic to filter the items based on the search query
    // in order to return the filtered items.
    return allItems.value.filter(item => searchFn(item, _query.toLowerCase()))
  }

  return {
    /**
     * A function that resolves the provided items based on the search query. 
     * It returns all items if the query is empty, or filters the items using the provided search function.
     * @param query The search query to filter the items. If undefined or empty, all items are returned.
     */
    resolve
  }
}

export type ActiveType = 'all' | 'product' | 'page' | 'content'

export type GoogleSearchOptions = {
  activeType: Ref<ActiveType>
  resolvers: ReturnType<typeof defineSearchResolver>[]
}

/**
 * A composable function that resolves the results for multiple search resolvers into
 * a single array of SearchItems. It takes an object with an activeType and an array of resolvers,
 * and returns a reactive object containing the search query and the resolved items based on the active type.
 * @param options The options object containing the active type and the array of search resolvers.
 */
export function useGoogleSearchComposable<T extends GoogleSearchOptions>(options: T) {
  const query = ref<string>('')
  const loweredQuery = computed(() => query.value.toLowerCase())
  
  const searchParams = useUrlSearchParams('history', { initialValue: { q: '' }, removeNullishValues: true })
  watch(query, (newValue) => {
    searchParams.q = newValue
  })
  
  const allItems = computed(() => {
    const items = options.resolvers.flatMap(resolver => resolver.resolve(loweredQuery.value))
    
    if (options.activeType.value === 'all') return items
    return items.filter(item => item.type === options.activeType.value)
  })

  return {
    /**
     * The search query entered by the user. This is synchronized with the URL's
     * search parameters, allowing for easy sharing and bookmarking of search results.
     * @default ''
     */
    query,
    /**
     * A computed property that returns all items from the provided resolvers based on the current search query.
     * @default []
     */
    allItems
  }
}

/**
 * A helper function that checks if the title of a SearchItem includes the search value.
 * @param item The SearchItem to be checked.
 * @param searchValue The search value to check against the item's title.
 */
export function googleSearchTitleHelper(item: SearchItem, searchValue: string) {
  if (searchValue === '') return false
  return item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
}
