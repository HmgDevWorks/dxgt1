import { View, Text, Image } from 'react-native'

type HistoryCardProps = {
    year: number
    champion: string
    image: any
    team: string
}

export default function HistoryCard({ year, champion, image, team }: HistoryCardProps) {
    return (
        <View className="flex-row items-center bg-f1-dark-gray rounded-xl p-4 mb-4 shadow-md">
            <Image source={image} className="w-12 h-12 rounded-full mr-4" />
            <View className="flex-1">
                <Text className="text-white font-bold text-base">{champion}</Text>
                <Text className="text-white/60 text-sm">{team}</Text>
            </View>
            <Text className="text-f1-red font-extrabold text-lg">{year}</Text>
        </View>
    )
}
