
import { MaterialIcons } from "@expo/vector-icons"

type Category = {
    id: string;
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export const categories: Category[] = [
    {
        id: "1",
        name: "Site",
        icon: "language",
    },
    {
        id: "2",
        name: "Projeto",
        icon: "code",
    },
    {
        id: "3",
        name: "Filmes",
        icon: "movie",
    },
    {
        id: "4",
        name: "Cursos",
        icon: "school",
    },
    {
        id: "5",
        name: "Notícias",
        icon: "newspaper",
    },
]