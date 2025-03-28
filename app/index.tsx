import { View, StyleSheet, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text } from '@/components/Themed';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Left Navigation */}
      <View style={styles.navigation}>
        <Pressable onPress={() => router.push('/')}>
          <FontAwesome name="home" size={24} />
          <Text>Hippero Logo</Text>
        </Pressable>
        
        <Link href="/quests" asChild>
          <Pressable>
            <FontAwesome name="target" size={24} />
            <Text>Quests</Text>
          </Pressable>
        </Link>
      </View>

      {/* Center Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Hippero!</Text>
        {/* Your main content here */}
      </View>

      {/* Right Panel */}
      <View style={styles.stats}>
        <Text>Leaderboard</Text>
        {/* Dynamic right content */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  navigation: {
    width: 100,
    backgroundColor: '#f0f0f0',
    padding: 15,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stats: {
    width: 250,
    backgroundColor: '#e0e0e0',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});