import { ScrollView, View } from 'react-native'
import CircuitCard from '../../components/CircuitCard'
import monza from '../../assets/circuits/monza.avif'
import spa from '../../assets/circuits/spa.avif'
import suzuka from '../../assets/circuits/suzuka.png'

export default function CircuitsScreen() {
    return (
        <ScrollView className="flex-1 bg-f1-black px-4 pt-6">
            <View className="mb-12">
                <CircuitCard name="Monza" location="Italy" image={monza} />
                <CircuitCard name="Spa-Francorchamps" location="Belgium" image={spa} />
                <CircuitCard name="Suzuka" location="Japan" image={suzuka} />
            </View>
        </ScrollView>
    )
}
