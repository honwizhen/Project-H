import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, View, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import Index from './index';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={styles.icon} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter(); // Initialize the router for navigation

  return (
    <View style={styles.container}>
      {/* Left Side - Navigation */}
      <View style={styles.navigation}>
        <FontAwesome name="bars" size={28} color="black" />

        {/* Button with logo and text to navigate to league.tsx */}
        <Pressable
          onPress={() => router.push('/league')}
          style={({ pressed }) => [
            styles.button,
            pressed && { opacity: 0.5 }, // Add a pressed effect
          ]}
        >
          <View style={styles.buttonContent}>
            <FontAwesome name="trophy" size={20} color="black" /> {/* Logo/Icon */}
            <Text style={styles.buttonText}>Go to League</Text> {/* Text */}
          </View>
        </Pressable>
      </View>

      {/* Center - Main Content with Tabs */}
      <View style={styles.content}>
        <Index />
      </View>

      {/* Right Side - Stats */}
      <View style={styles.stats}>
        <Pressable>
          <FontAwesome
            name="info-circle"
            size={25}
            color={Colors[colorScheme ?? 'light'].text}
            style={styles.headerIcon}
          />
        </Pressable>
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
    width: 300,  // Adjust width of the left panel as necessary
    backgroundColor: '#f0f0f0',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 3,  // Center section takes most space
    padding: 20,  // Optional padding for better spacing around the content
  },
  stats: {
    width: 600,  // Adjust width of the right panel
    backgroundColor: '#e0e0e0',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: -3,
  },
  headerIcon: {
    marginRight: 15,
  },
  button: {
    marginTop: 10, // Add some spacing
  },
  buttonContent: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Center items vertically
  },
  buttonText: {
    marginLeft: 10, // Add spacing between icon and text
    fontSize: 16,
    fontWeight: 'bold',
  },
});