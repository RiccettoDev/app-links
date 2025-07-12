import { View, Text, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

type Props = {
  name: string;
  url: string;
  image?: string; // <- adicionar a prop image
  onDetails: () => void;
};

export function Link({ name, url, image, onDetails }: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.details, { flexDirection: "row", alignItems: "center", gap: 8 }]}>
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: 40, height: 40, borderRadius: 4 }}
          />
        )}

        <View style={{ flex: 1 }}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.url} numberOfLines={1}>
            {url.length > 30 ? `${url.slice(0, 30)}...` : url}
          </Text>
          
        </View>
      </View>

      <TouchableOpacity onPress={onDetails}>
        <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]} />
      </TouchableOpacity>
    </View>
  );
}
