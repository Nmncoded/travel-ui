/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  primaryColor: '#ff7f36',
  bgColor: '#f4f4f4',
  black: '#27283a',
  white: '#fff',
	textMuted: '#9ca3af',
	text: '#000',
  secondaryTextColor : '#fff',
  inactiveTintColor : '#999',
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const fontSize = {
	xs: 12,
	sm: 16,
	base: 18,
	lg: 22,
  xl : 24,
}

export const screenPadding = {
	horizontal: 30,
  vertical: 30,
}
