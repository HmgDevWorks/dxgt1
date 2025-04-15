import { View, Text, Image } from 'react-native'

type DriverCardProps = {
    name: string
    number: number
    team: string
    image: any
    color?: string
}

export default function DriverCard({ name, number, team, image, color = '#e10600' }: DriverCardProps) {
    return (
        <View className="flex-row items-center bg-f1-dark-gray p-4 rounded-xl mb-4 shadow-sm">
            <Image
                source={image}
                className="w-16 h-16 rounded-full mr-4"
                resizeMode="cover"
            />

            <View className="flex-1">
                <Text className="text-white font-bold text-lg">{name}</Text>
                <Text className="text-white/60 text-sm">{team}</Text>
            </View>

            <View
                className="w-10 h-10 rounded-full items-center justify-center"
                style={{ backgroundColor: color }}
            >
                <Text className="text-white font-bold text-base">{number}</Text>
            </View>
        </View>
    )
}
