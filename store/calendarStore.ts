import { create } from 'zustand'
import { addMonths, subMonths } from 'date-fns'

type CalendarStore = {
  currentMonth: Date
  nextMonth: () => void
  prevMonth: () => void
}

export const useCalendarStore = create<CalendarStore>((set) => ({
  currentMonth: new Date(),
  nextMonth: () =>
    set((state) => ({ currentMonth: addMonths(state.currentMonth, 1) })),
  prevMonth: () =>
    set((state) => ({ currentMonth: subMonths(state.currentMonth, 1) })),
}))
