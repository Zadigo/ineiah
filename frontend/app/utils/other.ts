/**
 * Return the full URL for an Open Graph image based on the provided path.
 * @param path The path to the Open Graph image.
 */
export function getOgImageImageUrl(path: string): string {
  const _path = path.startsWith('/') ? path : `/${path}`
  return `${useRuntimeConfig().public.siteUrl}${_path}`
}

export function useCustomArrayJoin(seperator = ',', ...args: string[]): Ref<string> {
  return useArrayJoin(args.filter(arg => isDefined(arg) && arg.trim() !== ''), seperator)
}
