
import { MaterialIcons } from "@expo/vector-icons"

type Category = {
    id: string;
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export const categories: Category[] = [
    {
        id: "1",
        name: "Projeto",
        icon: "code",
    },
    {
        id: "2",
        name: "Site",
        icon: "language",
    },
    {
        id: "3",
        name: "Video",
        icon: "movie",
    },
]