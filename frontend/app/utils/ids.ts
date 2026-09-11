export type IdAction = 'link' | 'cta' | 'image' | 'service' | 'product' | 'tel' | (string & {})

export type IdLocation = 'header' | 'footer' | 'sidebar' | 'content' | 'navbar' | (string & {})

/**
 * Creates a unique element ID by combining a base string with additional parts.
 * @param base The base of the id, usually the component name.
 * @param location The location of the element, usually the section of the page.
 * @param parts The parts to be added to the id, usually the props of the component.
 */
export function createElementId(base: IdAction, location: IdLocation, ...parts: Array<string | number | undefined | null>): string {
  const _parts = parts
    .filter(p => p !== undefined && p !== null)
    .map(p => (p || '')
    .toString().
    replace(/ /g, '-'))
    .join('__')
  return `${base}-${location}-${_parts}`
}

/**
 * Composable to generate dynamic IDs from string values
 */
export function useDynamicId() {
  function create(value: string | null, prefix?: string): string {
    if (!value) {
      return ''
    }

    const noSpace = value.toLowerCase().replace(/\s+/g, '-')
    const noAccents = noSpace.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const noSpecialChars = noAccents.replace(/[^a-z0-9-]/g, '')

    if (prefix) {
      return `${prefix}-${noSpecialChars}`
    }

    return noSpecialChars
  }

  return {
    /**
     * Creates a dynamic ID from a string value
     * @param {string | null} value - The string to convert into an ID
     * @param {string} [prefix] - An optional prefix to prepend to the ID
     * @returns {string} The generated dynamic ID
     */
    create
  }
}
