import React from 'react';
import { 
  Pressable, 
  View, 
  Text, 
  StyleSheet, 
  PressableProps, 
  ViewStyle, 
  TextStyle, 
  PressableStateCallbackType 
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface NavButtonProps extends PressableProps {
  iconName: React.ComponentProps<typeof FontAwesome>['name'];
  text: string;
}

export default function NavButton({ iconName, text, onPress, style, ...props }: NavButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={(state: PressableStateCallbackType) => {
        const pressedStyle = state.pressed ? styles.pressed : {};
        const styleResult = typeof style === 'function' ? style(state) : style;
        return [styles.button, pressedStyle, styleResult];
      }}
      accessibilityRole="button"
      accessibilityLabel={text}
      {...props}
    >
      <View style={styles.buttonContent}>
        <FontAwesome 
          name={iconName} 
          size={20} 
          style={styles.icon}
        />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  } as ViewStyle,
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  } as TextStyle, // Changed to TextStyle
  pressed: {
    opacity: 0.5,
    backgroundColor: 'rgba(0,0,0,0.05)',
  } as ViewStyle,
  icon: {
    width: 20,
  } as ViewStyle,
});