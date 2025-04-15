import { ScrollView, View } from 'react-native'
import TeamCard from '../../components/TeamCard'
import astonmartin from '../../assets/teams/astonmartin.png'
import williams from '../../assets/teams/williams.png'
import stake from '../../assets/teams/stake.png'
import mclaren from '../../assets/teams/mclaren.png'

export default function TeamsScreen() {
    return (
        <ScrollView className="flex-1 bg-f1-black px-4 pt-6">
            <View className="mb-12">
                <TeamCard
                    name="Aston Martin"
                    logo={astonmartin}
                    primaryColor="#1e41ff"
                    secondaryColor="#1a1a2e"
                />
                <TeamCard
                    name="Williams"
                    logo={williams}
                    primaryColor="#e10600"
                    secondaryColor="#2c0a0a"
                />
                <TeamCard
                    name="Stake Sauber"
                    logo={stake}
                    primaryColor="#00d2be"
                    secondaryColor="#0e1b1b"
                />
                <TeamCard
                    name="McLaren"
                    logo={mclaren}
                    primaryColor="#ff8700"
                    secondaryColor="#2b1c0a"
                />
                {/* Continúa con el resto de escuderías */}
            </View>
        </ScrollView>
    )
}
