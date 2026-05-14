import { vi } from 'vitest'

// Minimal mock for firebase/firestore
export function getFirestore(app?: unknown) {
  return {
    settings: (_: unknown) => { },
    collection: (path: string) => ({
      path,
      doc: (id: string) => ({
        id,
        set: vi.fn(() => Promise.resolve()),
        get: vi.fn(() => Promise.resolve({
          exists: true,
          data: () => ({}),
        })),
        update: vi.fn(() => Promise.resolve()),
        delete: vi.fn(() => Promise.resolve()),
        collection: (sub: string) => ({
          path: `${path}/${id}/${sub}`,
          // same doc behavior...
        }),
      }),
      add: vi.fn(() => Promise.resolve({ id: 'mocked-id' })),
      where: (_: unknown, __: unknown, ___: unknown) => ({
        get: vi.fn(() => Promise.resolve({ docs: [] })),
      }),
      get: vi.fn(() => Promise.resolve({ docs: [] })),
    }),
    doc: (db: unknown, path: string) => ({
      path,
      id: path.split('/').pop(),
      set: vi.fn(() => Promise.resolve()),
      get: vi.fn(() => Promise.resolve({ exists: true, data: () => ({}) })),
    }),
    query: (_: unknown, ..._args: unknown[]) => ({
      get: vi.fn(() => Promise.resolve({ docs: [] })),
    }),
    onSnapshot: (_: unknown, cb: unknown) => {
      cb({ docs: [] })
      return () => { }
    },
    // add more firestore functions if you use them
  }
}
