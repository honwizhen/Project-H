import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from 'react-native';

const navItems = [
  { name: 'Home', icon: 'home', path: '/' },
  { name: 'League', icon: 'trophy', path: '/league' },
  { name: 'Quests', icon: 'tasks', path: '/quests' },
  { name: 'Shop', icon: 'shopping-bag', path: '/shop' },
  { name: 'Profile', icon: 'user', path: '/profile' },
  { name: 'Settings', icon: 'cog', path: '/settings' },
] as const;

export default function NavigationPane() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[
      styles.container,
      { 
        backgroundColor: isDark ? '#1a1a1a' : '#f0f0f0',
        borderRightColor: isDark ? '#333' : '#ddd'
      }
    ]}>
      {/* Top Logo - Matches your original placement */}
      <View style={styles.logoContainer}>
        <Text style={[
          styles.logoText,
          { color: isDark ? '#fff' : '#333' }
        ]}>
          PROJECT-H
        </Text>
      </View>

      {/* Navigation Items - Maintains your original spacing */}
      <View style={styles.navContent}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            asChild
          >
            <Pressable style={styles.navItem}>
              <FontAwesome 
                name={item.icon} 
                size={20} 
                style={[
                  styles.icon,
                  { color: isDark ? '#fff' : '#333' }
                ]} 
              />
              <Text style={[
                styles.navText,
                { color: isDark ? '#fff' : '#333' }
              ]}>
                {item.name}
              </Text>
            </Pressable>
          </Link>
        ))}
      </View>

      {/* Bottom Spacer - Matches your original layout */}
      <View style={styles.bottomSpacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 256,
    flex: 1,
    borderRightWidth: 1,
  },
  logoContainer: {
    padding: 20,
    paddingBottom: 30,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  navContent: {
    paddingHorizontal: 20,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 8,
  },
  navText: {
    marginLeft: 12,
    fontSize: 16,
  },
  icon: {
    width: 24,
    textAlign: 'center',
  },
  bottomSpacer: {
    flex: 1,
  }
});