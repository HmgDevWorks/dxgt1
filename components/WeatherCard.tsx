import { View, Text } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

type WeatherCardProps = {
    day: string
    condition: 'sun' | 'rain' | 'cloud' | 'storm'
    tempMax: number
    tempMin: number
}

const iconMap: Record<WeatherCardProps['condition'], JSX.Element> = {
    sun: <Ionicons name="sunny" size={24} color="#facc15" />,
    rain: <Ionicons name="rainy" size={24} color="#3b82f6" />,
    cloud: <Ionicons name="cloud-outline" size={24} color="#9ca3af" />,
    storm: <MaterialCommunityIcons name="weather-lightning" size={24} color="#f87171" />,
}

export default function WeatherCard({ day, condition, tempMax, tempMin }: WeatherCardProps) {
    return (
        <View className="bg-f1-dark-gray p-4 rounded-xl flex-row items-center justify-between shadow-md mb-4">
            <View>
                <Text className="text-white font-semibold text-base mb-1">{day}</Text>
                <Text className="text-white/60 text-sm">
                    {tempMax}°C / {tempMin}°C
                </Text>
            </View>

            <View>{iconMap[condition]}</View>
        </View>
    )
}
