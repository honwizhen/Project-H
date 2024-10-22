import React from 'react';
import { Text, View } from 'react-native';

const App: React.FC = () => {
  return (
    <View class={`flex-1 justify-center items-center bg-gray-100bg-white dark:bg-slate-800`}>
      <Text className={`text-2xl font-bold text-black mb-4 dark:text-white`}>
        Welcome to My Expo App!
      </Text>
      <Text className={`text-lg text-black dark:text-white `}>
        This is a basic TypeScript template for React Native.
      </Text>
    </View>
  );
};

export default App;
