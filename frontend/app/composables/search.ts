export interface SearchItem {
  id: string
  title: string
  description?: string
  slug: string
  type: 'product' | 'page' | 'content'
  to: string
  tags?: string[]
}

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
    activeType,
    query,
    allItems,
    searchedItems
  }
}
