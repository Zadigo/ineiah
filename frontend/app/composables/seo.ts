/**
 * Helper function to set up breadcrumbs for a page using Schema.org structured data.
 * @param title The title of the current page, used for the breadcrumb item.
 * @param position The position of the breadcrumb item in the list.
 */
export function useBreadcrumb(title: string, position: number = 2) {
  const url = useRuntimeConfig().public.siteUrl

  useSchemaOrg(
    [
      defineBreadcrumb({
        itemListElement: [
          {
            '@type': 'ListItem',
            position,
            name: title,
            item: url + useRoute().path
          }
        ]
      })
    ]
  )
}
