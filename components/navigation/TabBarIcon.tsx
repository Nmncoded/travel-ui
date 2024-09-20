// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import {Ionicons,MaterialIcons, FontAwesome} from '@expo/vector-icons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={28} style={[{ marginBottom: -4 }, style]} {...rest} />;
}

export function TabBarMaterialIcon({ style, ...rest }: IconProps<ComponentProps<typeof MaterialIcons>['name']>) {
  return <MaterialIcons size={28} style={[{ marginBottom: -4 }, style]} {...rest} />;
}


export function TabBarFontAwesomeIcon({ style, ...rest }: IconProps<ComponentProps<typeof FontAwesome>['name']>) {
  return <FontAwesome size={28} style={[{ marginBottom: -4 }, style]} {...rest} />;
}
