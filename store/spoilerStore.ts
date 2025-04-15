import { create } from 'zustand'

type SpoilerStore = {
  spoilerFree: boolean
  toggleSpoiler: () => void
}

export const useSpoilerStore = create<SpoilerStore>((set) => ({
  spoilerFree: false,
  toggleSpoiler: () =>
    set((state: SpoilerStore) => ({
      spoilerFree: !state.spoilerFree,
    })),
}))
