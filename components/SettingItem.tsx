import { View, Text, Switch } from 'react-native'

type SettingItemProps = {
    title: string
    description?: string
    value: boolean
    onToggle: () => void
}

export default function SettingItem({
    title,
    description,
    value,
    onToggle,
}: SettingItemProps) {
    return (
        <View className="bg-f1-dark-gray p-4 rounded-xl mb-4 flex-row items-center justify-between shadow-md">
            <View className="flex-1 pr-4">
                <Text className="text-white font-semibold">{title}</Text>
                {description && (
                    <Text className="text-white/60 text-xs">{description}</Text>
                )}
            </View>

            <Switch
                trackColor={{ false: '#3e3e3e', true: '#e10600' }}
                thumbColor="#ffffff"
                ios_backgroundColor="#3e3e3e"
                onValueChange={onToggle}
                value={value}
            />
        </View>
    )
}
