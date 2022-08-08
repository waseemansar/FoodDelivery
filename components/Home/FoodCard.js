import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors, Fonts, Sizes } from "../../constants/theme";

export default function FoodCard({ name, image, distance, time, starRatings, totalRatings }) {
    return (
        <View style={styles.item}>
            <Image source={image} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.deliveryInfo}>
                    {distance} <Ionicons name="ellipse" color={Colors.gray} size={Sizes.base / 2} /> {time}
                </Text>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.rattings}>
                    <Ionicons name="star" color={Colors.orange} />
                    {` ${starRatings} `}
                    <Ionicons name="ellipse" color={Colors.gray} size={Sizes.base / 2} />
                    {` ${totalRatings}+ ratings`}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        marginRight: Sizes.small,
        backgroundColor: Colors.gray100,
        borderRadius: Sizes.base,
        width: 250,
    },
    image: {
        width: "100%",
        height: 125,
        borderRadius: Sizes.base,
    },
    details: {
        padding: Sizes.small,
    },
    deliveryInfo: {
        color: Colors.gray,
    },
    name: {
        color: Colors.secondary,
        fontFamily: Fonts.bold,
        fontSize: Sizes.medium,
    },
    rattings: {
        color: Colors.secondary,
        fontFamily: Fonts.bold,
    },
});
