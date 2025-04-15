import { View, Text, Image, TouchableOpacity } from 'react-native'

type NewsCardProps = {
    title: string
    excerpt: string
    image: any
    date: string
    onPress?: () => void
}

export default function NewsCard({ title, excerpt, image, date, onPress }: NewsCardProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="bg-f1-dark-gray rounded-xl overflow-hidden mb-4 shadow-md"
        >
            <Image
                source={image}
                className="w-full h-40"
                resizeMode="cover"
            />

            <View className="p-4">
                <Text className="text-white font-bold text-base mb-1">{title}</Text>
                <Text className="text-white/70 text-sm mb-2" numberOfLines={2}>
                    {excerpt}
                </Text>
                <Text className="text-xs text-white/40">{date}</Text>
            </View>
        </TouchableOpacity>
    )
}
