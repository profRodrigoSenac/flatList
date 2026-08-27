import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

type Filme = { id: string; titulo: string; cor: string; img?: string };
type Categoria = { id: string; titulo: string; filmes: Filme[] };

const categorias: Categoria[] = [
  {
    id: "1",
    titulo: "Em Alta",
    filmes: [
      { id: "1a", titulo: "Oppenheimer", cor: "#1F2937", img: "https://i.pinimg.com/736x/ba/31/b2/ba31b22d9a89a4c0fcc67fd7009fc795.jpg" },
      { id: "1b", titulo: "Duna 2", cor: "#4B5563", img: "https://i.pinimg.com/736x/ec/53/e6/ec53e6a1733537aba98ef4198c1c1af0.jpg" },
      { id: "1c", titulo: "Barbie", cor: "#DB2777", img: "https://i.pinimg.com/736x/30/48/1e/30481e5d09a88700f9ad975c8ed0d21f.jpg" },
      { id: "1d", titulo: "Poor Things", cor: "#0F766E", img: "https://i.pinimg.com/1200x/f1/28/42/f12842aaf1b0417ecddbb03e1be776b7.jpg" },
      { id: "1e", titulo: "Saltburn", cor: "#7C3AED", img: "https://i.pinimg.com/736x/2d/41/e3/2d41e37be938c9390886092cf1410b17.jpg" },
    ],
  },
  {
    id: "2",
    titulo: "Ação",
    filmes: [
      { id: "2a", titulo: "John Wick 4", cor: "#DC2626", img: "https://i.pinimg.com/1200x/6e/50/a0/6e50a0bb3202e05cb9de75978b50e4a7.jpg" },
      { id: "2b", titulo: "Missão Impossível", cor: "#F97316", img: "https://i.pinimg.com/1200x/40/42/00/404200d6a15cb2b930e8e341da46243f.jpg" },
      { id: "2c", titulo: "Top Gun", cor: "#2563EB", img: "https://i.pinimg.com/736x/10/91/ef/1091ef30c9b2777e089032ae6fd1d3df.jpg" },
      { id: "2d", titulo: "Mad Max", cor: "#EF4444", img: "https://i.pinimg.com/1200x/93/d5/20/93d52028d3fd46a8099dd509dcc8529f.jpg" },
    ],
  },
  {
    id: "3",
    titulo: "Comédia",
    filmes: [
      { id: "3a", titulo: "Superbad", cor: "#F59E0B", img: "https://i.pinimg.com/1200x/a4/86/50/a486504e8854d00e7fcb84506308a189.jpg" },
      { id: "3b", titulo: "The Grand Budapest", cor: "#DB2777", img: "https://i.pinimg.com/736x/c5/78/bf/c578bfb3862d2b35c84aa831fba6daa6.jpg" },
      { id: "3c", titulo: "Knives Out", cor: "#14B8A6", img: "https://i.pinimg.com/736x/b7/91/f8/b791f8fad7ba685617032e5140cfd7f1.jpg" },
    ],
  },
  {
    id: "4",
    titulo: "Documentários",
    filmes: [
      { id: "4a", titulo: "Free Solo", cor: "#0EA5E9", img: "https://i.pinimg.com/736x/47/67/4b/47674b76cea2d71a970915ea01ac225a.jpg" },
      { id: "4b", titulo: "The Social Dilemma", cor: "#7C3AED", img: "https://i.pinimg.com/1200x/71/77/18/7177187de139c1db9c469b7a09979aa6.jpg" },
      { id: "4c", titulo: "My Octopus Teacher", cor: "#10B981", img: "https://i.pinimg.com/736x/5d/0a/1b/5d0a1b2dc410b81a48f39b54d03f260b.jpg" },
    ],
  },
  {
    id: "5",
    titulo: "Terror",
    filmes: [
      { id: "5a", titulo: "Hereditary", cor: "#0F172A", img: "https://i.pinimg.com/736x/18/05/80/1805801348473dd829d17d6f76e98ade.jpg" },
      { id: "5b", titulo: "Midsommar", cor: "#9333EA", img: "https://i.pinimg.com/1200x/c0/75/e3/c075e3236ac661386c005e399e2252af.jpg" },
      { id: "5c", titulo: "Get Out", cor: "#DC2626", img: "https://i.pinimg.com/736x/a1/3a/3c/a13a3c3d334f6511030c42f57cb571d8.jpg" },
    ],
  },
];

function FilmeCard({ item }: { item: Filme }) {
  const router = useRouter();

  return (
    <Pressable
      style={[styles.filmeCard, { backgroundColor: item.cor }]}
      onPress={() => router.push({ pathname: "/filme", params: { id: item.id } })}
    >
      <Text style={styles.filmeTitulo}>{item.titulo}</Text>
      {item.img ? (
        <Image source={{ uri: item.img }} style={styles.filmeImage} contentFit="cover" />
      ) : null}
    </Pressable>
  );
}

function CategoriaRow({ item }: { item: Categoria }) {
  return (
    <View style={styles.categoriaContainer}>
      <Text style={styles.categoriaTitulo}>{item.titulo}</Text>
      <FlatList
        data={item.filmes}
        keyExtractor={(filme) => filme.id}
        renderItem={({ item: filme }) => <FilmeCard item={filme} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default function Netflix() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://assets.nflxext.com/ffe/siteui/common/icons/netflix-m-icon.png" }}
          style={styles.logoImage}
          contentFit="contain"
        />
      </View>

      <FlatList
        data={categorias}
        keyExtractor={(cat) => cat.id}
        renderItem={({ item }) => <CategoriaRow item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1120",
  },
  header: {
    height: 80,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#111827",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#1F2937",
  },
  logoImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  categoriaContainer: {
    paddingVertical: 16,
  },
  categoriaTitulo: {
    color: "#F8FAFC",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  filmeCard: {
    width: 140,
    height: 180,
    borderRadius: 18,
    marginLeft: 20,
    padding: 12,
    justifyContent: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
    overflow: "hidden",
  },
  filmeTitulo: {
    color: "#F8FAFC",
    fontSize: 16,
    fontWeight: "700",
    zIndex: 1,
  },
  filmeImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 18,
  },
  listPadding: {
    paddingBottom: 80,
  },
});