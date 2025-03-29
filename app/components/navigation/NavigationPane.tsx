import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from 'react-native';

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
  section?: string;
}

export default function NavigationPane() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const navItems: NavItem[] = [
    { name: 'Home', icon: 'home', route: '/', section: 'Main' },
    { name: 'League', icon: 'trophy', route: '/league', section: 'Main' },
    { name: 'Quests', icon: 'tasks', route: '/quests', section: 'Main' },
    { name: 'Shop', icon: 'shopping-bag', route: '/shop', section: 'Main' },
    { name: 'Profile', icon: 'user', route: '/profile', section: 'Account' },
    { name: 'Settings', icon: 'cog', route: '/settings', section: 'Account' },
    { name: 'Help', icon: 'question-circle', route: '/help', section: 'Support' },
  ];

  const sections = [...new Set(navItems.map(item => item.section))];

  return (
    <View style={[
      styles.container,
      { 
        backgroundColor: isDark ? '#1a1a1a' : '#f0f0f0',
        borderRightColor: isDark ? '#333' : '#ddd'
      }
    ]}>
      {/* App Logo/Title */}
      <View style={styles.header}>
        <Text style={[styles.appTitle, { color: isDark ? '#fff' : '#333' }]}>
          MyApp
        </Text>
      </View>

      {/* Navigation Sections */}
      {sections.map((section) => (
        <View key={section} style={styles.sectionContainer}>
          <Text style={[
            styles.sectionTitle,
            { color: isDark ? '#aaa' : '#666' }
          ]}>
            {section}
          </Text>
          
          {navItems
            .filter(item => item.section === section)
            .map((item) => (
              <Link 
                key={item.route}
                href={item.route}
                asChild
              >
                <Pressable style={({ pressed }) => [
                  styles.navItem,
                  { 
                    backgroundColor: pressed 
                      ? isDark ? '#333' : '#e0e0e0' 
                      : 'transparent' 
                  }
                ]}>
                  <FontAwesome 
                    name={item.icon} 
                    size={18} 
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
      ))}

      {/* Bottom Space Filler */}
      <View style={styles.footer}>
        <Text style={[styles.versionText, { color: isDark ? '#666' : '#999' }]}>
          v1.0.0
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 240,
    flex: 1,
    borderRightWidth: 1,
    paddingTop: 40,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  navText: {
    marginLeft: 16,
    fontSize: 15,
    fontWeight: '500',
  },
  icon: {
    width: 24,
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  versionText: {
    fontSize: 12,
  }
});