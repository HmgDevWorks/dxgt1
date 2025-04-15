import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useCalendarStore } from '../store/calendarStore'
import {
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isToday,
} from 'date-fns'

export default function Calendar() {
    const { currentMonth, nextMonth, prevMonth } = useCalendarStore()

    const daysInCalendar = eachDayOfInterval({
        start: startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 }),
        end: endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 1 }),
    })

    return (
        <View className="bg-f1-dark-gray p-6 rounded-xl mb-6 shadow-md">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-6">
                <Text className="text-xl font-bold text-white">
                    {format(currentMonth, 'MMMM yyyy')}
                </Text>
                <View className="flex-row space-x-2">
                    <TouchableOpacity
                        onPress={prevMonth}
                        className="bg-f1-light-gray w-9 h-9 rounded-full items-center justify-center"
                    >
                        <MaterialIcons name="chevron-left" size={20} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={nextMonth}
                        className="bg-f1-light-gray w-9 h-9 rounded-full items-center justify-center"
                    >
                        <MaterialIcons name="chevron-right" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Weekend Highlight Block */}
            <View className="bg-gradient-to-r from-f1-light-gray to-f1-dark-gray p-5 rounded-lg border-l-4 border-f1-red mb-4">
                <View className="flex-row justify-between mb-4">
                    <Text className="text-white font-semibold text-base">
                        Australian Grand Prix Weekend
                    </Text>
                    <Text className="bg-f1-red text-white text-xs px-3 py-1 rounded-full font-semibold">
                        Standard
                    </Text>
                </View>
                <View className="flex-row flex-wrap gap-2">
                    {['FP1: Fri 12:30', 'FP2: Fri 16:00', 'FP3: Sat 12:30', 'Quali: Sat 16:00', 'Race: Sun 15:00'].map(
                        (text, index) => (
                            <Text
                                key={index}
                                className="bg-black/20 text-white px-3 py-1 rounded-full text-sm"
                            >
                                {text}
                            </Text>
                        )
                    )}
                </View>
            </View>

            {/* Grid Header */}
            <View className="grid grid-cols-7 gap-2 mt-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                    <Text key={i} className="text-center text-f1-red font-semibold text-xs">
                        {day}
                    </Text>
                ))}

                {/* Days */}
                {daysInCalendar.map((day, index) => {
                    const dayNum = day.getDate()
                    const today = isToday(day)
                    const outside = !isSameMonth(day, currentMonth)

                    let bg = 'bg-f1-light-gray'
                    if (outside) bg = 'bg-[#2a2a33]'
                    if (today) bg += ' border-2 border-f1-red'

                    const raceDay = format(day, 'yyyy-MM-dd') === '2025-03-23'
                    const qualiDay = format(day, 'yyyy-MM-dd') === '2025-03-22'
                    const practiceDay = format(day, 'yyyy-MM-dd') === '2025-03-21'

                    if (raceDay) bg = 'bg-f1-red'
                    if (qualiDay) bg = 'bg-[#ff8700]'
                    if (practiceDay) bg = 'bg-[#0090ff]'

                    return (
                        <View key={index} className={`rounded-md p-2 h-16 justify-between ${bg}`}>
                            <Text className="text-white text-center text-sm">{dayNum}</Text>
                            {raceDay && <Text className="bg-white text-xs text-f1-red text-center rounded px-1">Race</Text>}
                            {qualiDay && <Text className="bg-white text-xs text-[#ff8700] text-center rounded px-1">Quali</Text>}
                            {practiceDay && <Text className="bg-white text-xs text-[#0090ff] text-center rounded px-1">Practice</Text>}
                        </View>
                    )
                })}
            </View>
        </View>
    )
}