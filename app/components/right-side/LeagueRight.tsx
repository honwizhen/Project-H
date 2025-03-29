import { StyleSheet, Text, View } from 'react-native';

export default function LeagueRight() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>League Stats</Text>
      <Text>Rank: Gold III</Text>
      <Text>Points: 1,250</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16
  }
});