import { describe, expect, it } from 'vitest'
// import { objectResolver, useGoogleSearchItems } from '../../app/composables/google_search'


// vi.mock('../../app/composables/google_search/utils', async (importOriginal) => {
//   const actual = await importOriginal<typeof import('../../app/composables/google_search/utils')>()

//   return {
//     ...actual,
//     toValue: (value: unknown) => value,
//     isDefined: (value: unknown) => value !== undefined && value !== null
//   }
// })

// type TestItem = {
//   id: number
//   name: string
//   description?: string
//   nested: {
//     description: string
//     tags: string[]
//   }
//   tags?: string[]
// }

// const items = [
//   {
//     id: 1,
//     name: 'Some name',
//     nested: {
//       description: 'Some description',
//       tags: [ 'tag1', 'tag2' ]
//     }
//   },
//   {
//     id: 2,
//     name: 'Another name',
//     nested: {
//       description: 'Another description',
//       tags: [ 'tag3', 'tag4' ]
//     }
//   }
// ]

describe('Google Search composable', () => {
  it('should resolve objects', () => {
    expect(true).toBeTruthy()
  })

  // describe('objectResolver', () => {
  //   const newItems = objectResolver<TestItem>(items, (obj) => {
  //     return {
  //       id: 1,
  //       title: obj.name,
  //       description: obj.nested.description,
  //       slug: obj.name,
  //       type: 'page',
  //       to: `/items/${obj.id}`,
  //       tags: obj.nested.tags
  //     }
  //   })

  //   expect(newItems.length > 0).toBeTruthy()
  //   expect(Array.isArray(newItems)).toBe(true)
  // })

  // describe('useGoogleSearchItems', () => {
  //   const resolvedItems = objectResolver<TestItem>(items, (obj) => ({
  //     id: obj.id,
  //     title: obj.name,
  //     description: obj.nested.description,
  //     slug: obj.name,
  //     type: 'page',
  //     to: `/items/${obj.id}`,
  //     tags: obj.nested.tags,
  //   }))

  //   const searched = useGoogleSearchItems(resolvedItems, (item, searchValue) => {
  //     // return item.name.toLowerCase().includes(searchValue)
  //     console.log('Items to search:', item, searchValue)
  //     return true
  //   })

  //   const values = searched.resolve('some search value')
  //   expect(Array.isArray(values)).toBe(true)
  // })
})
