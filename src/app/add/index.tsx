import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";
import { linkStorage } from "@/storage/link-storage";
import * as ImagePicker from "expo-image-picker";

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");

  async function handleAdd() {
    try {
      if (!category) {
        return Alert.alert("Categoria", "Selecione a categoria");
      }

      if (!name.trim()) {
        return Alert.alert("Nome", "Informe o nome");
      }

      if (!url.trim()) {
        return Alert.alert("URL", "Informe a URL");
      }

      await linkStorage.save({
        id: new Date().getTime().toString(),
        category,
        name,
        url,
        image,
      });

      Alert.alert("Sucesso", "Link salvo com sucesso", [
        { text: "Ok", onPress: () => router.back() },
      ]);
    } catch (error) {
      Alert.alert("Error", "Não foi possível salvar o link");
      console.log(error);
    }
  }

  async function handlePickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
      base64: false,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>

      <Categories onChange={setCategory} selected={category} />

      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
        <Input placeholder="URL" onChangeText={setUrl} autoCorrect={false} />

        <TouchableOpacity style={styles.selectImage} onPress={handlePickImage}>
          <Text style={{ color: colors.gray[200] }}>
            {image ? "Imagem selecionada ✅" : "Selecionar imagem"}
          </Text>
        </TouchableOpacity>

        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
