import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import GetStarted from "./screens/GetStarted";

const Stack = createNativeStackNavigator();

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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
