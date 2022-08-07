import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import GetStarted from "./screens/GetStarted";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import { Colors } from "./constants/theme";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomNavigation() {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.secondary,
                tabBarInactiveTintColor: Colors.gray,
                tabBarStyle: { backgroundColor: Colors.white },
            }}
        >
            <BottomTabs.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
                }}
            />
            <BottomTabs.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => <Ionicons name="person-circle-outline" color={color} size={size} />,
                }}
            />
        </BottomTabs.Navigator>
    );
}

export default function App() {
    const [loaded] = useFonts({
        EudoxusBold: require("./assets/fonts/EudoxusSans-Bold.ttf"),
        EudoxusExtraBold: require("./assets/fonts/EudoxusSans-ExtraBold.ttf"),
        EudoxusLight: require("./assets/fonts/EudoxusSans-Light.ttf"),
        EudoxusExtraLight: require("./assets/fonts/EudoxusSans-ExtraLight.ttf"),
        EudoxusRegular: require("./assets/fonts/EudoxusSans-Regular.ttf"),
        EudoxusMedium: require("./assets/fonts/EudoxusSans-Medium.ttf"),
    });

    if (!loaded) return null;

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
