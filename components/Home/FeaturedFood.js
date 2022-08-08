import { ScrollView, StyleSheet, Text, View } from "react-native";

import FoodCard from "./FoodCard";
import { Colors, Sizes } from "../../constants/theme";

export default function FeaturedFood({ foodItems }) {
    if (foodItems.length === 0)
        return (
            <View style={styles.fallbackTextContainer}>
                <Text style={styles.fallbackText}>No food found!</Text>
            </View>
        );

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {foodItems &&
                foodItems.map((item) => (
                    <FoodCard
                        key={item.id}
                        name={item.name}
                        image={item.image}
                        distance={item.distance}
                        time={item.time}
                        starRatings={item.starRatings}
                        totalRatings={item.totalRatings}
                    />
                ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    fallbackTextContainer: {
        paddingVertical: Sizes.base,
        alignItems: "center",
    },
    fallbackText: {
        color: Colors.gray,
        fontSize: Sizes.font,
    },
});
