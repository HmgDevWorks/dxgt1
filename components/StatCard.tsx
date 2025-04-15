import { View, Text } from 'react-native'

type StatCardProps = {
    label: string
    value: string | number
    unit?: string
    accentColor?: string
}

export default function StatCard({
    label,
    value,
    unit,
    accentColor = '#e10600',
}: StatCardProps) {
    return (
        <View className="bg-f1-dark-gray p-4 rounded-xl w-[48%] mb-4 shadow-md">
            <Text className="text-white/60 text-xs mb-1">{label}</Text>
            <Text className="text-white font-bold text-2xl">
                {value}
                {unit && <Text className="text-base text-white/50"> {unit}</Text>}
            </Text>
            <View
                className="h-1 mt-3 rounded-full"
                style={{ backgroundColor: accentColor }}
            />
        </View>
    )
}
