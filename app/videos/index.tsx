import { ScrollView, View } from 'react-native'
import VideoCard from '../../components/VideoCard'
// import video1 from '../assets/videos/video1.jpg'
// import video2 from '../assets/videos/video2.jpg'
// import video3 from '../assets/videos/video3.jpg'
import video1 from '../../assets/news/news1.avif'
import video2 from '../../assets/news/news2.avif'
import video3 from '../../assets/news/news3.avif'

export default function VideosScreen() {
    return (
        <ScrollView className="flex-1 bg-f1-black px-4 pt-6">
            <View className="mb-12">
                <VideoCard
                    title="Highlights: Australian Grand Prix 2025"
                    image={video1}
                    date="April 14, 2025"
                />
                <VideoCard
                    title="Onboard: Verstappen Pole Lap"
                    image={video2}
                    date="April 13, 2025"
                />
                <VideoCard
                    title="Team Radio Reactions"
                    image={video3}
                    date="April 12, 2025"
                />
            </View>
        </ScrollView>
    )
}
