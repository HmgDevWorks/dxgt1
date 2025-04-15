import { ScrollView, View } from 'react-native'
import NewsCard from '../../components/NewsCard'
import news1 from '../../assets/news/news1.avif'
import news2 from '../../assets/news/news2.avif'
import news3 from '../../assets/news/news3.avif'

export default function NewsScreen() {
    return (
        <ScrollView className="flex-1 bg-f1-black px-4 pt-6">
            <View className="mb-12">
                <NewsCard
                    title="Leclerc Signs Multi-Year Ferrari Extension"
                    excerpt="Charles Leclerc has committed to Ferrari until the 2027 season, reaffirming his loyalty to the Scuderia."
                    image={news1}
                    date="April 12, 2025"
                />
                <NewsCard
                    title="Red Bull Brings Major Aero Update to Imola"
                    excerpt="The RB21 will feature new sidepods and a revised rear wing for the upcoming European leg."
                    image={news2}
                    date="April 10, 2025"
                />
                <NewsCard
                    title="FIA Proposes New Qualifying Format for 2026"
                    excerpt="New session structure may bring more strategy and surprises, with tire compound limitations."
                    image={news3}
                    date="April 8, 2025"
                />
            </View>
        </ScrollView>
    )
}
