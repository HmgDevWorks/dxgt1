import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider";
// import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet, View, ScrollView } from 'react-native';

import Header from '../components/Header'
import Countdown from '../components/Countdown'
import Calendar from '../components/Calendar';
import SessionCard from '../components/SessionCard';
// import CircuitDetails from '../components/CircuitDetails';
// import albertParkImage from '../assets/circuits/albertParkImage.avif'
// import WeatherCard from '../components/WeatherCard';
// import StandingsTable from '../components/StandingsTable';

// import alonso from '../assets/drivers/falonso.png'
// import sainz from '../assets/drivers/csainz.png'
// import DriverCard from '../components/DriverCard';
// import astonmartin from '../assets/teams/astonmartin.png'
// import williams from '../assets/teams/williams.png'
// import TeamCard from '../components/TeamCard';

// import news1 from '../assets/news/news1.avif'
// import news2 from '../assets/news/news2.avif'
// import NewsCard from '../components/NewsCard';
// // import video1 from '../assets/videos/video1.jpg'
// // import video2 from '../assets/videos/video2.jpg'
// import VideoCard from '../components/VideoCard';
// import StatCard from '../components/StatCard';


export default function Home() {
  return (
    <GluestackUIProvider mode="dark">
      <View style={styles.container}>
        <ScrollView className="flex-1 bg-f1-black px-4 pt-6">
          <Header />
          <Countdown />
          <Calendar />
          <SessionCard
            day="Friday"
            sessions={[
              { name: 'FP1', time: '12:30', weather: 'sun', status: 'finished' },
              { name: 'FP2', time: '16:00', weather: 'cloud', status: 'finished' },
            ]}
          />

          <SessionCard
            day="Saturday"
            sessions={[
              { name: 'FP3', time: '12:30', weather: 'rain', status: 'finished' },
              { name: 'Quali', time: '16:00', weather: 'cloud', status: 'live' },
            ]}
          />

          <SessionCard
            day="Sunday"
            sessions={[
              { name: 'Race', time: '15:00', weather: 'storm', status: 'upcoming' },
            ]}
          />
          {/* <CircuitDetails
            name="Albert Park Circuit"
            location="Melbourne, Australia"
            length="5.303 km"
            laps={58}
            distance="307.574 km"
            image={albertParkImage}
            tyres={['Soft', 'Medium', 'Hard']}
          />

          <WeatherCard day="Friday" condition="sun" tempMax={28} tempMin={18} />
          <WeatherCard day="Saturday" condition="cloud" tempMax={26} tempMin={17} />
          <WeatherCard day="Sunday" condition="rain" tempMax={22} tempMin={16} />

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

          <DriverCard name="Nano" number={14} team="Aston Martin" image={alonso} color="#1e41ff" />
          <DriverCard name="El Gravas" number={55} team="Williams" image={sainz} color="#e10600" />

          <TeamCard name="Aston Martin" logo={williams} primaryColor="#1e41ff" />
          <TeamCard name="Williams" logo={williams} primaryColor="#e10600" />

          <NewsCard
            title="Leclerc Signs Multi-Year Ferrari Extension"
            excerpt="Charles Leclerc has committed to Ferrari until the 2027 season, reaffirming his loyalty to the Scuderia."
            image={news1}
            date="April 12, 2025"
          />

          <NewsCard
            title="Red Bull Brings Major Aero Update to Imola"
            excerpt="The RB21 will feature new sidepods and a revised rear wing for the upcoming European leg."
            image={news2}
            date="April 10, 2025"
          />

          <VideoCard
            title="Highlights: Australian Grand Prix 2025"
            image={news1}
            date="April 14, 2025"
          />

          <VideoCard
            title="Onboard: Verstappen Pole Lap"
            image={news2}
            date="April 13, 2025"
          />

          <StatCard label="Pole Positions" value={9} />
          <StatCard label="Average Finish" value={2.1} unit="pos" accentColor="#00d2be" />
          <StatCard label="Total Points" value={203} unit="pts" />
          <StatCard label="Fastest Laps" value={3} /> */}

        </ScrollView>
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
