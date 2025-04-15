import { ScrollView, View } from 'react-native'
import StandingsTable from '../../components/StandingsTable'
import alonso from '../../assets/drivers/falonso.png'
import sainz from '../../assets/drivers/csainz.png'
import astonmartin from '../../assets/teams/astonmartin.png'
import williams from '../../assets/teams/williams.png'

export default function StandingsScreen() {
    return (
        <ScrollView className="flex-1 bg-f1-black px-4 pt-6">
            <View className="mb-8">
                <StandingsTable
                    title="Driver Standings"
                    data={[
                        {
                            position: 1,
                            name: 'Don Fernando "Magic" Alonso',
                            team: 'Tractor Martin',
                            points: 203,
                            image: alonso,
                        },
                        {
                            position: 2,
                            name: 'Carlos "CDT" Sainz',
                            team: 'Williams',
                            points: 75,
                            image: sainz,
                        },
                    ]}
                />
            </View>

            <View className="mb-12">
                <StandingsTable
                    title="Constructor Standings"
                    data={[
                        {
                            position: 1,
                            name: 'Tractor Martin',
                            team: '',
                            points: 275,
                            image: astonmartin,
                        },
                        {
                            position: 2,
                            name: 'Williams',
                            team: '',
                            points: 175,
                            image: williams,
                        },
                    ]}
                />
            </View>
        </ScrollView>
    )
}
