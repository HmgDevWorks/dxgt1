import { ScrollView, View } from 'react-native'
import HistoryCard from '../../components/HistoryCard'
import alonso from '../../assets/drivers/falonso.png'
import sainz from '../../assets/drivers/csainz.png'

export default function HistoryScreen() {
    return (
        <ScrollView className="flex-1 bg-f1-black px-4 pt-6">
            <View className="mb-12">
                <HistoryCard year={2023} champion="Fernando Alonso" team="Red Bull Racing" image={alonso} />
                <HistoryCard year={2020} champion="Carlos Sainz" team="Williams" image={sainz} />
                <HistoryCard year={2019} champion="Carlos Sainz" team="Ferrari" image={sainz} />
            </View>
        </ScrollView>
    )
}
