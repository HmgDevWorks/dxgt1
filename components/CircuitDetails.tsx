import { View, Text, Image } from 'react-native'

type CircuitDetailsProps = {
    name: string
    location: string
    length: string
    laps: number
    distance: string
    image: any // import desde assets
    tyres: string[]
}

const tyreColors: Record<string, string> = {
    soft: '#ea3323',
    medium: '#ffd500',
    hard: '#ffffff',
    inter: '#43b047',
    wet: '#0090ff',
}

export default function CircuitDetails({
    name,
    location,
    length,
    laps,
    distance,
    image,
    tyres,
}: CircuitDetailsProps) {
    return (
        <View className="bg-f1-dark-gray p-6 rounded-xl shadow-md mb-6">
            {/* Header */}
            <Text className="text-white text-2xl font-bold mb-1">{name}</Text>
            <Text className="text-white/80 mb-4 text-sm">{location}</Text>

            {/* Circuit Image */}
            <Image
                source={image}
                className="w-full h-40 mb-4 rounded-lg"
                resizeMode="contain"
            />

            {/* Data Table */}
            <View className="grid grid-cols-3 gap-4 mb-4">
                <View>
                    <Text className="text-white/50 text-xs">Length</Text>
                    <Text className="text-white font-semibold">{length}</Text>
                </View>
                <View>
                    <Text className="text-white/50 text-xs">Laps</Text>
                    <Text className="text-white font-semibold">{laps}</Text>
                </View>
                <View>
                    <Text className="text-white/50 text-xs">Race Distance</Text>
                    <Text className="text-white font-semibold">{distance}</Text>
                </View>
            </View>

            {/* Tyres */}
            <Text className="text-white/70 text-sm mb-2 font-medium">Tyres for this GP</Text>
            <View className="flex-row gap-2 flex-wrap">
                {tyres.map((tyre, i) => (
                    <View
                        key={i}
                        className="px-3 py-1 rounded-full"
                        style={{ backgroundColor: tyreColors[tyre.toLowerCase()] || '#aaa' }}
                    >
                        <Text
                            className={`text-xs font-bold ${tyre === 'Hard' ? 'text-black' : 'text-white'
                                }`}
                        >
                            {tyre.toUpperCase()}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    )
}
