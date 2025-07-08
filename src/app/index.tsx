import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

import { colors } from "@/styles/colors";
import styles from "./styles";
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";

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

            <FlatList 
                data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                keyExtractor={(item) => item}
                renderItem={() => (
                    <Link 
                        name="Rocketseat"
                        url="https://www.rocketseat.com.br/"
                        onDetails={() => alert("Clicou") }
                    />
                )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}