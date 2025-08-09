// components/navigation/TabBarIcon.tsx
import Ionicons from '@expo/vector-icons/Ionicons';
import { type ComponentProps } from 'react';
import { StyleSheet } from 'react-native';

// Define the type for the icon names based on Ionicons
type IconName = ComponentProps<typeof Ionicons>['name'];

/**
 * A reusable component to display tab bar icons.
 * It uses Ionicons from `@expo/vector-icons`.
 *
 * @param {object} props - The props for the TabBarIcon component.
 * @param {IconName} props.name - The name of the Ionicons icon to display (e.g., 'home', 'home-outline').
 * @param {string} props.color - The color of the icon.
 * @param {any} [props.style] - Optional style to apply to the icon.
 * @param {any} [props.rest] - Any other props to pass to the Ionicons component.
 */
export function TabBarIcon({
  style,
  name,
  color,
  ...rest
}: {
  name: IconName;
  color: string;
  style?: any; // You can refine this type if needed, e.g., StyleProp<TextStyle>
}) {
  return (
    <Ionicons
      size={28}
      style={[styles.icon, style]} // Apply default and custom styles
      name={name}
      color={color}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    marginBottom: -3, // Small adjustment to align with text
  },
});