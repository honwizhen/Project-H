import { StyleSheet, View } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text } from '@/components/Themed';

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hippero</Text>

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
