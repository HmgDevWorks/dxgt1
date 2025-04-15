import { View, Text, Image } from 'react-native'

type TeamCardProps = {
    name: string
    logo: any
    primaryColor?: string
    secondaryColor?: string
}

export default function TeamCard({
    name,
    logo,
    primaryColor = '#e10600',
    secondaryColor = '#1f1f27',
}: TeamCardProps) {
    return (
        <View
            className="flex-row items-center p-4 rounded-xl mb-4 shadow-sm"
            style={{ backgroundColor: secondaryColor }}
        >
            <Image
                source={logo}
                className="w-14 h-14 mr-4"
                resizeMode="contain"
            />

            <Text
                className="text-white font-bold text-lg flex-1"
                style={{ color: primaryColor }}
            >
                {name}
            </Text>
        </View>
    )
}
