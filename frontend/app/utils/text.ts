/**
 * Composable to generate slugs from string values, removing accents
 * @param {...string[]} args - The string values to generate the slug from
 */
export function useSlug(...args: string[]): string {
  return args.map(arg => arg.toLowerCase().replace(/\s+/g, '-')).join('-').replace(/[\u0300-\u036f]/g, "")
}
