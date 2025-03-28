import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/components/useColorScheme';

export default function Separator() {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.separator,
        { backgroundColor: theme === 'light' ? '#eee' : 'rgba(255,255,255,0.1)' },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});