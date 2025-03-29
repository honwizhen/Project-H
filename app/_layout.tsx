import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme , Platform} from 'react-native';
import { ErrorBoundary } from '@/components/ErrorBoundary';

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

  return (
    <ErrorBoundary>
      <RootLayoutNav />
    </ErrorBoundary>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Main screens with hidden headers */}
        <Stack.Screen name="index" options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="league" options={{ headerShown: false }} />
        <Stack.Screen name="quests" options={{ headerShown: false }} />
        <Stack.Screen name="shop" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="help" options={{ headerShown: false }} />
        
        {/* Enhanced Modal Configuration */}
        <Stack.Screen 
          name="modal" 
          options={{
            presentation: 'modal',
            headerShown: true,
            headerTitle: 'Settings',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#fff',
            },
            headerTitleStyle: {
              fontWeight: '600',
            },
            // iOS-specific modal styling
            ...Platform.select({
              ios: {
                headerBlurEffect: colorScheme === 'dark' ? 'dark' : 'light',
              },
              android: {
                animation: 'slide_from_bottom',
              }
            })
          }} 
        />
      </Stack>
    </ThemeProvider>
  );
}