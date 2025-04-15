import { View, Text, Image } from 'react-native'

type CircuitCardProps = {
    name: string
    location: string
    image: any
}

export default function CircuitCard({ name, location, image }: CircuitCardProps) {
    return (
        <View className="bg-f1-dark-gray rounded-xl overflow-hidden mb-4 shadow-md">
            <Image source={image} className="w-full h-40" resizeMode="cover" />
            <View className="p-4">
                <Text className="text-white font-bold text-base">{name}</Text>
                <Text className="text-white/60 text-sm">{location}</Text>
            </View>
        </View>
    )
}
