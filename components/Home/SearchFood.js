import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors, Sizes } from "../../constants/theme";

export default function SearchFood() {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Ionicons name="search-outline" color={Colors.gray} size={Sizes.extraLarge} />
                <TextInput style={styles.input} placeholder="Search your perfect food" placeholderTextColor={Colors.gray} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Sizes.large,
        paddingVertical: Sizes.base,
    },
    inputContainer: {
        width: "100%",
        backgroundColor: Colors.gray100,
        flexDirection: "row",
        alignItems: "center",
        padding: Sizes.base,
        borderRadius: Sizes.base,
    },
    input: {
        marginLeft: Sizes.base,
    },
});
