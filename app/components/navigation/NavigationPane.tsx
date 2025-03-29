import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Define your route paths as a type
type AppRoute = 
  | '/'
  | '/league'
  | '/quests'
  | '/shop'
  | '/profile'
  | '/settings'
  | '/help';

interface NavItem {
  name: string;
  icon: React.ComponentProps<typeof FontAwesome>['name'];
  route: AppRoute;
}

const navItems: NavItem[] = [
  { name: 'Home', icon: 'home', route: '/' },
  { name: 'League', icon: 'trophy', route: '/league' },
  { name: 'Quests', icon: 'tasks', route: '/quests' },
  { name: 'Shop', icon: 'shopping-bag', route: '/shop' },
  { name: 'Profile', icon: 'user', route: '/profile' },
  { name: 'Settings', icon: 'cog', route: '/settings' },
];

export default function NavigationPane() {
  return (
    <View style={styles.container}>
      {navItems.map((item) => (
        <Link 
          key={item.route}
          href={item.route}
          asChild
        >
          <Pressable style={styles.navItem}>
            <FontAwesome name={item.icon} size={20} style={styles.icon} />
            <Text style={styles.navText}>{item.name}</Text>
          </Pressable>
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRightWidth: 1,
    borderRightColor: '#ddd'
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
  }
});