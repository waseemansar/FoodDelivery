import { View, StatusBar, SafeAreaView, Image, StyleSheet, ScrollView } from "react-native";

import { Colors, Sizes } from "../constants/theme";
import assets from "../constants/assets";

export default function Home() {
    return (
        <>
            <StatusBar animated={true} backgroundColor={Colors.white} barStyle="dark-content" />
            <SafeAreaView style={styles.screen}>
                <ScrollView horizontal contentContainerStyle={styles.brands} showsHorizontalScrollIndicator={false}>
                    <View style={[styles.brandItem, styles.activeBrand]}>
                        <Image style={styles.brandImage} source={assets.brand01} />
                    </View>
                    <View style={styles.brandItem}>
                        <Image style={styles.brandImage} source={assets.brand02} />
                    </View>
                    <View style={styles.brandItem}>
                        <Image style={styles.brandImage} source={assets.brand03} />
                    </View>
                    <View style={styles.brandItem}>
                        <Image style={styles.brandImage} source={assets.brand04} />
                    </View>
                    <View style={styles.brandItem}>
                        <Image style={styles.brandImage} source={assets.brand05} />
                    </View>
                    <View style={styles.brandItem}>
                        <Image style={styles.brandImage} source={assets.brand06} />
                    </View>
                    <View style={styles.brandItem}>
                        <Image style={styles.brandImage} source={assets.brand07} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    brands: {
        paddingHorizontal: Sizes.large,
        paddingVertical: Sizes.font,
    },
    brandItem: {
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        height: 80,
        backgroundColor: Colors.gray100,
        borderRadius: Sizes.base,
        marginRight: Sizes.font,
    },
    brandImage: {
        width: 40,
        height: 40,
    },
    activeBrand: {
        backgroundColor: Colors.primary,
    },
});
