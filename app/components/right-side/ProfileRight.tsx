import { StyleSheet, Text, View } from 'react-native';
import { useColorScheme } from 'react-native';

export default function ProfileRight() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[styles.container, { 
      backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5'
    }]}>
      <Text style={[styles.title, { color: isDark ? '#fff' : '#333' }]}>
        Profile Stats
      </Text>
      
      <View style={styles.statItem}>
        <Text style={{ color: isDark ? '#aaa' : '#666' }}>Level</Text>
        <Text style={[styles.statValue, { color: isDark ? '#fff' : '#333' }]}>
          42
        </Text>
      </View>

      <View style={styles.statItem}>
        <Text style={{ color: isDark ? '#aaa' : '#666' }}>Achievements</Text>
        <Text style={[styles.statValue, { color: isDark ? '#fff' : '#333' }]}>
          15/25
        </Text>
      </View>

      <View style={styles.statItem}>
        <Text style={{ color: isDark ? '#aaa' : '#666' }}>Member Since</Text>
        <Text style={[styles.statValue, { color: isDark ? '#fff' : '#333' }]}>
          Jan 2023
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statItem: {
    marginBottom: 16,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  }
});