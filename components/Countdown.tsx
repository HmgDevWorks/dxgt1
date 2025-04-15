import { View, Text, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { differenceInSeconds } from 'date-fns'

const targetDate = new Date('2025-03-23T15:00:00')

function formatCountdown(secondsLeft: number) {
    const days = Math.floor(secondsLeft / (60 * 60 * 24))
    const hours = Math.floor((secondsLeft % (60 * 60 * 24)) / 3600)
    const minutes = Math.floor((secondsLeft % 3600) / 60)
    const seconds = secondsLeft % 60
    return { days, hours, minutes, seconds }
}

export default function Countdown() {
    const [remaining, setRemaining] = useState(() =>
        differenceInSeconds(targetDate, new Date())
    )

    useEffect(() => {
        const interval = setInterval(() => {
            setRemaining(differenceInSeconds(targetDate, new Date()))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const { days, hours, minutes, seconds } = formatCountdown(remaining)

    return (
        <View className="bg-gradient-to-br from-f1-red to-[#ff4d4d] p-6 rounded-xl mb-6 shadow-lg">
            <View className="flex-row items-start">
                {/* Race Date */}
                <View className="bg-black/30 p-4 rounded-lg mr-6 items-center w-20">
                    <Text className="text-f1-white font-bold text-lg">MAR</Text>
                    <Text className="text-3xl font-black leading-none">23</Text>
                    <Text className="text-sm font-semibold mt-1">15:00</Text>
                </View>

                {/* Race Info */}
                <View className="flex-1">
                    <Text className="text-2xl font-extrabold text-white mb-1">
                        Australian Grand Prix
                    </Text>
                    <Text className="text-sm text-white/90 mb-4">
                        <Ionicons name="location-sharp" size={14} color="#fff" />{' '}
                        Albert Park Circuit, Melbourne
                    </Text>

                    {/* Countdown */}
                    <View className="flex-row mb-4">
                        {[
                            { label: 'days', value: days },
                            { label: 'hours', value: hours },
                            { label: 'minutes', value: minutes },
                            { label: 'seconds', value: seconds },
                        ].map((item, index) => (
                            <View
                                key={index}
                                className="bg-black/30 rounded-md px-4 py-2 mr-2 min-w-[70px] items-center"
                            >
                                <Text className="text-white text-xl font-extrabold">
                                    {String(item.value).padStart(2, '0')}
                                </Text>
                                <Text className="text-[10px] uppercase text-white/80">
                                    {item.label}
                                </Text>
                            </View>
                        ))}
                    </View>

                    {/* Actions */}
                    <View className="flex-row">
                        <TouchableOpacity className="bg-white text-f1-red px-4 py-2 rounded-md flex-row items-center mr-2">
                            <Ionicons name="calendar" size={16} color="#e10600" />
                            <Text className="text-f1-red font-bold ml-2">Add to Calendar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="border border-white px-4 py-2 rounded-md flex-row items-center">
                            <MaterialIcons name="info" size={16} color="#fff" />
                            <Text className="text-white font-bold ml-2">Race Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
