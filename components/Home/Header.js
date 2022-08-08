import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors, Fonts, Sizes } from "../../constants/theme";

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <View>
                <View style={styles.locationTop}>
                    <Text style={styles.locationTopText}>Your Location</Text>
                    <Ionicons name="chevron-down-outline" color={Colors.gray} size={Sizes.medium} />
                </View>
                <Text style={styles.location}>Dubai</Text>
            </View>
            <View style={styles.cart}>
                <Ionicons name="basket-outline" color={Colors.secondary} size={Sizes.extraLarge} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: Sizes.large,
    },
    locationTop: {
        flexDirection: "row",
        alignItems: "center",
    },
    locationTopText: {
        marginRight: Sizes.base,
        color: Colors.gray,
    },
    location: {
        color: Colors.secondary,
        fontSize: Sizes.extraLarge,
        fontFamily: Fonts.extraBold,
    },
    cart: {
        width: 42,
        height: 42,
        backgroundColor: Colors.gray100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
});
