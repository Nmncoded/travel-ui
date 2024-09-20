import { TabBarIcon, TabBarMaterialIcon, TabBarFontAwesomeIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { View } from "react-native";


export default function TabsLayout() {
    const colorScheme = useColorScheme();
    return (
        <Tabs
            screenOptions={{
                headerShown: true,
                headerTitleAlign: 'center',
                tabBarStyle: {
                    backgroundColor: Colors.bgColor,
                    borderTopWidth: 0,
                    padding: 0,
                    height: 60

                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: Colors.black,
                tabBarInactiveTintColor : Colors.inactiveTintColor,
                // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            }}
        >

            <Tabs.Screen name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon size={28} name={focused ? 'compass' : 'compass-outline'} color={color} />
                    ),
                }}
            />
            <Tabs.Screen name="category"
                options={{
                    title: 'Category',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarMaterialIcon size={28} name={focused ? 'space-dashboard' : 'space-dashboard'} color={color} />
                    ),
                }}
            />
            <Tabs.Screen name="search"
                options={{
                    title: 'Search',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={{backgroundColor: Colors.primaryColor,paddingHorizontal: 16, paddingVertical:12,borderRadius:18, height:50}} >
                            <TabBarIcon size={28} name={focused ? 'search-circle' : 'search'} color={Colors.white} />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen name="bookmarks"
                options={{
                    title: 'Bookmark',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon size={28} name={focused ? 'bookmark-outline' : 'bookmark'} color={color} />
                    ),
                }}
            />
            <Tabs.Screen name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarFontAwesomeIcon size={28} name={focused ? 'user-circle' : 'user'} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
