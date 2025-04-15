import { ScrollView, View, Text } from 'react-native'
import SettingItem from '../../components/SettingItem'
import { useSpoilerStore } from '../../store/spoilerStore'

export default function SettingsScreen() {
    const { spoilerFree, toggleSpoiler } = useSpoilerStore()

    return (
        <ScrollView className="flex-1 bg-f1-black px-4 pt-6">
            <Text className="text-white text-xl font-bold mb-6">Settings</Text>

            <View className="mb-12">
                <SettingItem
                    title="Spoiler-Free Mode"
                    description="Hide session results and points until watched"
                    value={spoilerFree}
                    onToggle={toggleSpoiler}
                />

                <SettingItem
                    title="Notifications"
                    description="Get alerts before sessions and news"
                    value={true}
                    onToggle={() => { }}
                />

                <SettingItem
                    title="Dark Mode"
                    description="Coming soon... but you're already living it 🌚"
                    value={true}
                    onToggle={() => { }}
                />
            </View>
        </ScrollView>
    )
}
