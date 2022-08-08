import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Fonts, Sizes } from "../../constants/theme";
import FeaturedFood from "./FeaturedFood";

export default function FeaturedRow({ foodItems, title, description }) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <Ionicons name="chevron-forward-outline" color={Colors.secondary} size={Sizes.extraLarge} />
            </View>
            <FeaturedFood foodItems={foodItems} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Sizes.large,
        paddingVertical: Sizes.base,
    },
    row: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: Sizes.base,
    },
    title: {
        color: Colors.secondary,
        fontFamily: Fonts.extraBold,
        fontSize: Sizes.extraLarge,
    },
    description: {
        color: Colors.gray,
        fontSize: Sizes.font,
    },
});
