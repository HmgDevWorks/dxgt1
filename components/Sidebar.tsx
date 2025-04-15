import { View, Text, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const navItems = [
    { icon: 'calendar', label: 'Calendar', route: '/calendar' },
    { icon: 'trophy', label: 'Standings', route: '/standings' },
    { icon: 'account-group', label: 'Drivers', route: '/drivers' },
    { icon: 'car-sports', label: 'Teams', route: '/teams' },
    { icon: 'newspaper', label: 'News', route: '/news' },
    { icon: 'video', label: 'Videos', route: '/videos' },
    { icon: 'chart-line', label: 'Stats', route: '/stats' },
    { icon: 'map', label: 'Circuits', route: '/circuits' },
    { icon: 'history', label: 'History', route: '/history' },
    { icon: 'cog', label: 'Settings', route: '/settings' },
]

export default function Sidebar() {
    const router = useRouter()

    console.log('Sidebar is rendering...');

    return (
        <View className="bg-[#1f1f27] w-[250px] h-full p-4 shadow-lg">
            <View className="flex items-center mb-8">
                <MaterialCommunityIcons name="flag-checkered" size={32} color="#e10600" />
            </View>

            {navItems.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    className="flex-row items-center p-3 mb-2 rounded-md transition-all active:bg-[#38383f]"
                    onPress={() => router.push(item.route)}
                >
                    <MaterialCommunityIcons
                        name={item.icon as any}
                        size={20}
                        color="#ffffff"
                        style={{ marginRight: 12 }}
                    />
                    <Text className="text-white font-medium">{item.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}
