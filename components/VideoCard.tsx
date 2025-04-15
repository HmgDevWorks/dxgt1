import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

type VideoCardProps = {
    title: string
    image: any
    date: string
    onPress?: () => void
}

export default function VideoCard({ title, image, date, onPress }: VideoCardProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="bg-f1-dark-gray rounded-xl overflow-hidden mb-4 shadow-md"
        >
            {/* Video Thumbnail */}
            <View className="relative w-full h-48">
                <Image source={image} className="w-full h-full" resizeMode="cover" />

                {/* Play icon overlay */}
                <View className="absolute inset-0 justify-center items-center">
                    <Ionicons name="play-circle" size={48} color="#ffffffcc" />
                </View>
            </View>

            {/* Info */}
            <View className="p-4">
                <Text className="text-white font-bold text-base mb-1">{title}</Text>
                <Text className="text-white/40 text-xs">{date}</Text>
            </View>
        </TouchableOpacity>
    )
}
