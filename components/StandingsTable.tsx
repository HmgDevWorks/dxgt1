import { View, Text, Image } from 'react-native'

type StandingItem = {
    position: number
    name: string
    team: string
    points: number
    image: any // bandera o avatar
}

type StandingsTableProps = {
    title: string
    data: StandingItem[]
}

export default function StandingsTable({ title, data }: StandingsTableProps) {
    return (
        <View className="bg-f1-dark-gray p-5 rounded-xl mb-6 shadow-md">
            <Text className="text-white text-xl font-bold mb-4">{title}</Text>

            {data.map((item, i) => (
                <View
                    key={i}
                    className="flex-row items-center justify-between mb-3 bg-f1-light-gray p-3 rounded-md"
                >
                    {/* Left side */}
                    <View className="flex-row items-center space-x-3">
                        <Text className="text-f1-red font-bold w-6 text-center">
                            {item.position}
                        </Text>
                        <Image
                            source={item.image}
                            className="w-6 h-6 rounded-full"
                            resizeMode="cover"
                        />
                        <View>
                            <Text className="text-white font-semibold">{item.name}</Text>
                            <Text className="text-white/50 text-xs">{item.team}</Text>
                        </View>
                    </View>

                    {/* Points */}
                    <Text className="text-white font-mono font-bold text-base">
                        {item.points} pts
                    </Text>
                </View>
            ))}
        </View>
    )
}
