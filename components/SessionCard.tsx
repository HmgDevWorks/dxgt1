import { View, Text } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

type Session = {
    name: string
    time: string
    weather: 'sun' | 'rain' | 'cloud' | 'storm'
    status: 'live' | 'upcoming' | 'finished'
}

type SessionDayProps = {
    day: string
    sessions: Session[]
}

const weatherIcons: Record<Session['weather'], JSX.Element> = {
    sun: <Ionicons name="sunny" size={16} color="#facc15" />,
    rain: <Ionicons name="rainy" size={16} color="#3b82f6" />,
    cloud: <Ionicons name="cloud" size={16} color="#9ca3af" />,
    storm: <MaterialCommunityIcons name="weather-lightning" size={16} color="#f87171" />,
}

export default function SessionCard({ day, sessions }: SessionDayProps) {
    return (
        <View className="bg-f1-dark-gray p-5 rounded-xl mb-4 shadow-sm">
            <Text className="text-white font-bold text-lg mb-3">{day}</Text>

            {sessions.map((session, index) => {
                const statusColor =
                    session.status === 'live'
                        ? 'text-green-400'
                        : session.status === 'finished'
                            ? 'text-gray-400'
                            : 'text-white'

                return (
                    <View
                        key={index}
                        className="flex-row justify-between items-center bg-f1-light-gray p-3 rounded-md mb-2"
                    >
                        <View className="flex-row items-center space-x-2">
                            {weatherIcons[session.weather]}
                            <Text className={`font-semibold ${statusColor}`}>
                                {session.name}
                            </Text>
                        </View>

                        <Text className={`font-mono ${statusColor}`}>{session.time}</Text>
                    </View>
                )
            })}
        </View>
    )
}
