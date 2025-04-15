import { Stack } from 'expo-router'
import { SafeAreaView, View, useWindowDimensions } from 'react-native'
import Sidebar from '../components/Sidebar'

export default function RootLayout() {
    const { height } = useWindowDimensions()

    console.log('RootLayout is rendering...');
    return (
        <SafeAreaView
            className="flex-row bg-f1-black w-full"
            style={{ height }}
        >
            <Sidebar />

            <View style={{ flex: 1 }}>
                <Stack
                    screenOptions={{
                        headerShown: false,
                        animation: 'fade',
                    }}
                />
            </View>
        </SafeAreaView>
    )
}
