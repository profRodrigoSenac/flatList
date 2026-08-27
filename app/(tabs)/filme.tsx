import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

// Componente principal da tela de filme
export default function Filme() {
    return (
        <View style={styles.container}>
            {/* Linha principal: pôster (esquerda) + informações (direita) */}
            <View style={styles.row}>
                {/* Pôster do filme (imagem) */}
                <Image
                    source={{ uri: "https://i.pinimg.com/736x/30/48/1e/30481e5d09a88700f9ad975c8ed0d21f.jpg" }}
                    style={styles.poster}
                    contentFit="cover"
                />

                {/* Área de informação: título, subtítulo, sinopse e elenco */}
                <View style={styles.info}>
                    {/* Título do filme */}
                    <Text style={styles.title}>Barbie</Text>
                    {/* Informações menores (gênero e ano) */}
                    <Text style={styles.subtitle}>Comédia · Fantasia · 2023</Text>

                    {/* Cabeçalho da seção de sinopse */}
                    <Text style={styles.section}>Sinopse</Text>
                    {/* Texto da sinopse (limita linhas para manter layout) */}
                    <Text style={styles.text} numberOfLines={6}>
                        Em uma aventura colorida e cheia de humor, Barbie explora identidade,
                        amizade e o que significa ser perfeito em um mundo que espera muito
                        de você.
                    </Text>

                    {/* Cabeçalho e lista curta de elenco */}
                    <Text style={styles.section}>Elenco</Text>
                    <Text style={styles.text}>Margot Robbie, Ryan Gosling, America Ferrera...</Text>
                </View>
            </View>
        </View>
    );
}

// Estilos: alterei apenas tamanhos (largura/altura e fontes)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#0B1120",
    },
    row: {
        flexDirection: "row", // organiza itens em linha
        alignItems: "flex-start",
    },
    poster: {
        width: 180, 
        height: 280,
        marginRight: 16,
        backgroundColor: "#222",
    },
    info: {
        flex: 1,
        justifyContent: "flex-start",
    },
    title: {
        color: "#F8FAFC",
        fontSize: 28,
        fontWeight: "700",
    },
    subtitle: {
        color: "#94A3B8",
        marginTop: 6,
        marginBottom: 10,
        fontSize: 16, 
    },
    section: {
        color: "#F8FAFC",
        fontSize: 18,
        fontWeight: "600",
        marginTop: 12,
        marginBottom: 6,
    },
    text: {
        color: "#E6EEF5",
        lineHeight: 22, 
        fontSize: 15, 
    },
});
    