import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function LeagueScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>League Screen</Text>
      <View style={styles.separator} />
      <Text>This is the League screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});