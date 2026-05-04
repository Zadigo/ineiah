import type { Nullable } from '~/types'

/**
 * Generate a random delay for motion animations, up to 300 milliseconds.
 * This can be used to create a staggered effect when multiple elements are animated.
 */
export function randomMotionDelays() {
  return Math.floor(Math.random() * 300)
}

/**
 * Helper function to create a unique element ID by combining a base name with additional arguments.
 * The additional arguments are converted to lowercase and spaces are replaced with hyphens.
 * @param name The base name for the element ID.
 * @param separator The separator to use between the name and the arguments. Defaults to '_'.
 * @param args Additional strings to include in the element ID.
 * @returns The generated element ID.
 */
export function createElementId(name: string, separator?: Nullable<string>, ...args: string[]) {
  const _args = args.map(x => x.toLowerCase().replace(/\s/g, '-'))
  return `${name}${separator ?? '__'}${_args.join('-')}`
}

/**
 * Return the full URL for an Open Graph image based on the provided path.
 * @param path The path to the Open Graph image.
 */
export function getOgImageImageUrl(path: string): string {
  const _path = path.startsWith('/') ? path : `/${path}`
  return `${useRuntimeConfig().public.siteUrl}${_path}`
}
