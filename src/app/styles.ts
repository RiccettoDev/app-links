import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    header: {
        paddingHorizontal: 24,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 22,
    },
    logo: {
        width: 38,
        height: 32,
    },
    title: {
        color: colors.green[300],
        fontSize: 22,
    },
});

export default styles;