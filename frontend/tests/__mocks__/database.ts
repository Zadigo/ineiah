import { vi } from 'vitest'

// Simple mock for firebase/database
export function getDatabase(app?: unknown) {
  return {
    ref: (path: string) => ({
      path,
      set: vi.fn((value: unknown) => Promise.resolve()),
      push: vi.fn((value: unknown) =>
        Promise.resolve({
          key: 'mockedKey',
        })
      ),
      onValue: vi.fn((callback: (snapshot: unknown) => void) => {
        // Optionally invoke callback with empty mock
        callback({
          val: () => null,
        })
      }),
      off: vi.fn(),
    }),
    // Add other methods you use, e.g., serverTimestamp
    serverTimestamp: () => Date.now(),
  }
}

// Mock other helpers if needed
// export function ref(db: unknown, path: string) {
//   return db.ref(path)
// }
// export function push(refObj: unknown, value?: unknown) {
//   return refObj.push(value)
// }
// export function set(refObj: unknown, value: unknown) {
//   return refObj.set(value)
// }
// export function onValue(refObj: unknown, cb: unknown) {
//   return refObj.onValue(cb)
// }
