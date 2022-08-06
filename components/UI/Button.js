import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts, Shadows, Sizes } from "../../constants/theme";

export default function Button({ children, pressHandler }) {
    return (
        <Pressable onPress={pressHandler} style={({ pressed }) => pressed && styles.pressed}>
            <View style={styles.button}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        padding: Sizes.small,
        borderRadius: Sizes.font,
        ...Shadows.light,
    },
    text: {
        fontSize: Sizes.medium,
        fontFamily: Fonts.bold,
        textAlign: "center",
    },
    pressed: {
        opacity: 0.7,
    },
});
