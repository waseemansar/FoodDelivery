import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { Colors, Sizes } from "../../constants/theme";

export default function BrandItem({ active, id, image, onPress }) {
    return (
        <TouchableOpacity onPress={onPress.bind(this, id)}>
            <View style={[styles.brandItem, active && styles.active]}>
                <Image style={styles.brandImage} source={image} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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
        width: 50,
        height: 50,
    },
    active: {
        backgroundColor: Colors.primary,
    },
});
