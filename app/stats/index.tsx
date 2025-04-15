import { ScrollView, View, Text } from 'react-native'
import StatCard from '../../components/StatCard'

export default function StatsScreen() {
    return (
        <ScrollView className="flex-1 bg-f1-black px-4 pt-6">
            <Text className="text-white text-xl font-bold mb-6">Season Stats</Text>

            <View className="flex-row flex-wrap justify-between">
                <StatCard label="Pole Positions" value={9} />
                <StatCard label="Average Finish" value={2.1} unit="pos" accentColor="#00d2be" />
                <StatCard label="Total Points" value={203} unit="pts" />
                <StatCard label="Fastest Laps" value={3} />
                <StatCard label="Podiums" value={7} />
                <StatCard label="Wins" value={5} accentColor="#facc15" />
            </View>
        </ScrollView>
    )
}
