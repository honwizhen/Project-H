import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import NavButton from '../../components/navigation/NavButton';
import LeagueRight from '../../components/right-side/LeagueRight';
import QuestsRight from '../../components/right-side/QuestsRight';
import ShopRight from '../../components/right-side/ShopRight';
import ProfileRight from '../../components/right-side/ProfileRight';
import HelpRight from '../../components/right-side/HelpRight';

export default function TabLayout() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Left Side - Navigation */}
      <View style={styles.navigation}>
        <NavButton
          iconName="home"
          text="This should be top left hippero logo"
          onPress={() => router.push('/index')}
        />
        <NavButton
          iconName="check-square"
          text="Check task"
          onPress={() => router.push('/index')}
        />
        <NavButton
          iconName="target"
          text="Check out new quests"
          onPress={() => router.push('/quests')}
        />
        <NavButton
          iconName="trophy"
          text="Go to League"
          onPress={() => router.push('/league')}
        />
        <NavButton
          iconName="shopping-cart"
          text="Shop"
          onPress={() => router.push('/shop')}
        />
        <NavButton
          iconName="user"
          text="Profile"
          onPress={() => router.push('/profile')}
        />
        <NavButton
          iconName="question-circle"
          text="Help"
          onPress={() => router.push('/help')}
        />
      </View>

      {/* Center - Main Content with Tabs */}
      <View style={styles.content}>
        {/* Dynamic content based on the route */}
        {router.pathname === '/index' && <Index />}
        {router.pathname === '/league' && <LeagueScreen />}
        {router.pathname === '/quests' && <QuestsScreen />}
        {router.pathname === '/shop' && <ShopScreen />}
        {router.pathname === '/profile' && <ProfileScreen />}
        {router.pathname === '/help' && <HelpScreen />}
      </View>

      {/* Right Side - Stats */}
      <View style={styles.stats}>
        {/* Dynamic content based on the route */}
        {router.pathname === '/index' && <IndexRight />}
        {router.pathname === '/league' && <LeagueRight />}
        {router.pathname === '/quests' && <QuestsRight />}
        {router.pathname === '/shop' && <ShopRight />}
        {router.pathname === '/profile' && <ProfileRight />}
        {router.pathname === '/help' && <HelpRight />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  navigation: {
    width: 300,
    backgroundColor: '#f0f0f0',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 3,
    padding: 20,
  },
  stats: {
    width: 600,
    backgroundColor: '#e0e0e0',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});