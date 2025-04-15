import { ScrollView, View } from 'react-native'
import DriverCard from '../../components/DriverCard'
import alonso from '../../assets/drivers/falonso.png'
import sainz from '../../assets/drivers/csainz.png'
import piastri from '../../assets/drivers/opiastri.png'
import hulkenberg from '../../assets/drivers/nhulkenberg.png'

export default function DriversScreen() {
    return (
        <ScrollView className="flex-1 bg-f1-black px-4 pt-6">
            <View className="mb-12">
                <DriverCard
                    name="Fernando Alonso"
                    number={1}
                    team="Aston Martin"
                    image={alonso}
                    color="#1e41ff"
                />
                <DriverCard
                    name="Carlos Sainz"
                    number={55}
                    team="Williams"
                    image={sainz}
                    color="#e10600"
                />
                <DriverCard
                    name="Oscar Piastri"
                    number={3}
                    team="McLaren"
                    image={piastri}
                    color="#1e41ff"
                />
                <DriverCard
                    name="Nico Hülkenberg"
                    number={27}
                    team="Stake"
                    image={hulkenberg}
                    color="#e10600"
                />
                {/* Puedes seguir con el resto del grid... */}
            </View>
        </ScrollView>
    )
}
