import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function shop() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hippero</Text>
      <View style={styles.separator} />
      <Text>This is the shop screen.</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures it fills the middle section in _layout.tsx
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#ccc',
  },
});
