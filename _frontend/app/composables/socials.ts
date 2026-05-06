/**
 * Composable for generating social media links
 */
export function useSocialLinks() {
  function instagram(username: string) {
    return `https://www.instagram.com/${username}`
  }

  return {
    /**
     * Generates the full URL for an Instagram profile based on the provided username.
     * @param username - The Instagram username to generate the URL for.
     * @returns A string containing the full URL to the Instagram profile.
     */
    instagram
  }
}
