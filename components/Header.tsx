import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useSpoilerStore } from '../store/spoilerStore'

export default function Header() {
    const { spoilerFree, toggleSpoiler } = useSpoilerStore()

    console.log('Header is rendering...');

    return (
        <View className="flex-row justify-between items-center mb-6 pb-4 border-b border-f1-light-gray">
            {/* Search Bar */}
            <TextInput
                className="bg-f1-dark-gray text-f1-white px-4 py-3 rounded-full w-72 shadow-inner"
                placeholder="Search for races, drivers, teams..."
                placeholderTextColor="#aaa"
            />

            {/* Action Buttons */}
            <View className="flex-row items-center space-x-4">
                <TouchableOpacity
                    onPress={toggleSpoiler}
                    className={`flex-row items-center px-4 py-2 rounded-full ${spoilerFree ? 'bg-f1-red' : 'bg-f1-dark-gray'
                        }`}
                >
                    <Ionicons
                        name={spoilerFree ? 'eye-off' : 'eye-off-outline'}
                        size={18}
                        color="#fff"
                    />
                    <Text className="text-white ml-2 text-sm">
                        Spoiler-Free Mode
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity className="bg-f1-dark-gray w-10 h-10 rounded-full flex items-center justify-center">
                    <Ionicons name="notifications-outline" size={20} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity className="bg-f1-dark-gray w-10 h-10 rounded-full flex items-center justify-center">
                    <MaterialIcons name="person" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
