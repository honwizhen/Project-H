import { StyleSheet, Text, View } from 'react-native';
import { useColorScheme } from 'react-native';

export default function QuestsRight() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const quests = [
    { name: 'Daily Challenge', progress: '3/5', reward: '50 XP' },
    { name: 'Weekly Special', progress: '1/3', reward: '100 XP' },
    { name: 'Seasonal Quest', progress: '2/7', reward: '200 XP' },
  ];

  return (
    <View style={[styles.container, { 
      backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5'
    }]}>
      <Text style={[styles.title, { color: isDark ? '#fff' : '#333' }]}>
        Active Quests
      </Text>
      
      {quests.map((quest, index) => (
        <View key={index} style={styles.questItem}>
          <Text style={[styles.questName, { color: isDark ? '#fff' : '#333' }]}>
            {quest.name}
          </Text>
          <Text style={{ color: isDark ? '#aaa' : '#666' }}>
            Progress: {quest.progress}
          </Text>
          <Text style={{ color: isDark ? '#4CAF50' : '#2E7D32' }}>
            Reward: {quest.reward}
          </Text>
        </View>
      ))}
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
  questItem: {
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)'
  },
  questName: {
    fontWeight: '600',
    marginBottom: 4,
  }
});