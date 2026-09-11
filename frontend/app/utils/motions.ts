/**
 * Generate a random delay for motion animations, up to 300 milliseconds.
 * This can be used to create a staggered effect when multiple elements are animated.
 */
export function randomMotionDelays() {
  return Math.floor(Math.random() * 300)
}
