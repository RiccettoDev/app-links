import { Stack } from "expo-router"; // sistemas de rotas em pilhas, onde tudo que é abeto novo abre sobre o anterior

import { colors } from "@/styles/colors";

export default function Layout() {
    return (
        <Stack 
            screenOptions={{
                headerShown: false, // para retirar o cabeçalho automático que o Stack adiciona
                contentStyle: {
                    backgroundColor: colors.gray[950]
                }
            }}
        />
    )
}