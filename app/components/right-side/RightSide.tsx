import { StyleSheet, View } from 'react-native';
import { usePathname } from 'expo-router';
import ProfileRight from './ProfileRight';
import QuestsRight from './QuestsRight';
import ShopRight from './ShopRight';
import LeagueRight from './LeagueRight';

export default function RightSide() {
  const pathname = usePathname();
  
  // Extract the base route (e.g., '/profile' → 'profile')
  const currentRoute = pathname?.split('/')[1] || 'index';

  return (
    <View style={styles.container}>
      {currentRoute === 'league' && <LeagueRight />}
      {currentRoute === 'profile' && <ProfileRight />}
      {currentRoute === 'quests' && <QuestsRight />}
      {currentRoute === 'shop' && <ShopRight />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
    backgroundColor: '#f5f5f5' // Default light mode background
  }
});