import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image } from "react-native";

import Button from "../components/UI/Button";
import assets from "../constants/assets";
import { Colors, Fonts, Sizes } from "../constants/theme";

export default function GetStarted({ navigation }) {
    function getStartedHandler() {
        navigation.navigate("BottomNavigation", { screen: "Home" });
    }

    return (
        <>
            <StatusBar animated={true} backgroundColor={Colors.primary} barStyle="dark-content" />
            <SafeAreaView style={styles.screen}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={assets.eating01} />
                </View>
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Feeling Hungry?</Text>
                        <Text style={styles.description}>
                            All the best resturants with their top menu waiting for you, they can't wait for your order!
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button pressHandler={getStartedHandler}>Get Started</Button>
                    </View>
                </View>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 0, backgroundColor: Colors.white }} />
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    imageContainer: {
        flex: 3,
        paddingTop: Sizes.extraLarge * 2,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.white,
        paddingHorizontal: Sizes.extraLarge,
        paddingBottom: Sizes.large,
        paddingTop: Sizes.extraLarge * 2,
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: Sizes.large,
        fontFamily: Fonts.bold,
        color: Colors.secondary,
    },
    description: {
        fontSize: Sizes.font,
        fontFamily: Fonts.regular,
        color: Colors.gray,
        textAlign: "center",
    },
    buttonContainer: {
        width: "100%",
    },
});
