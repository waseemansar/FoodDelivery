import { ScrollView, StyleSheet } from "react-native";

import BrandItem from "./BrandItem";
import { Sizes } from "../../constants/theme";

export default function Brands({ activeBrandId, brands, onPress }) {
    return (
        <ScrollView horizontal contentContainerStyle={styles.brands} showsHorizontalScrollIndicator={false}>
            {brands &&
                brands.map((brand) => (
                    <BrandItem key={brand.id} active={brand.id === activeBrandId} id={brand.id} image={brand.image} onPress={onPress} />
                ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    brands: {
        paddingHorizontal: Sizes.large,
        paddingVertical: Sizes.base,
        height: 100,
    },
});
