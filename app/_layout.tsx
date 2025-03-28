// app/_layout.tsx
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/components/useColorScheme';

// Error boundary for catching navigation errors
export { ErrorBoundary } from 'expo-router';

// Prevent splash screen from hiding prematurely
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Handle font loading errors
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  // Hide splash screen when fonts are loaded
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Main 3-pane screen */}
        <Stack.Screen 
          name="index" 
          options={{ 
            headerShown: false,
            // Disable swipe back gesture on iOS
            gestureEnabled: false 
          }} 
        />
        
        {/* Individual screens */}
        <Stack.Screen 
          name="league" 
          options={{ 
            headerShown: false,
            // Disable swipe back to maintain layout consistency
            gestureEnabled: false
          }} 
        />
        <Stack.Screen 
          name="quests" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="shop" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="profile" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="help" 
          options={{ headerShown: false }} 
        />
        
        {/* Modal example */}
        <Stack.Screen 
          name="modal" 
          options={{ 
            presentation: 'modal',
            headerShown: true,
            headerTitle: 'Settings'
          }} 
        />
      </Stack>
    </ThemeProvider>
  );
}