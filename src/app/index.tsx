import { View, Image, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

import { colors } from "@/styles/colors";
import styles from "./styles";
import { Categories } from "@/components/categories";

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} alt="logo" style={styles.logo} />

                <TouchableOpacity>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>

            <Categories />
        </View>
    )
}