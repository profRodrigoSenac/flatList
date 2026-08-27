import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";

const TODOS_OS_FILMES: Record<
  string,
  { titulo: string; genero: string; ano: string; sinopse: string; elenco: string; img: string }
> = {
  "1a": {
    titulo: "Oppenheimer",
    genero: "Biografia · Drama · História",
    ano: "2023",
    sinopse: "A história do físico americano J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica.",
    elenco: "Cillian Murphy, Emily Blunt, Matt Damon",
    img: "https://i.pinimg.com/736x/ba/31/b2/ba31b22d9a89a4c0fcc67fd7009fc795.jpg",
  },
  "1b": {
    titulo: "Duna 2",
    genero: "Ação · Aventura · Ficção Científica",
    ano: "2024",
    sinopse: "Paul Atreides se une a Chani e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família.",
    elenco: "Timothée Chalamet, Zendaya, Rebecca Ferguson",
    img: "https://i.pinimg.com/736x/ec/53/e6/ec53e6a1733537aba98ef4198c1c1af0.jpg",
  },
  "1c": {
    titulo: "Barbie",
    genero: "Comédia · Fantasia",
    ano: "2023",
    sinopse: "Em uma aventura colorida e cheia de humor, Barbie explora identidade, amizade e o que significa ser perfeito.",
    elenco: "Margot Robbie, Ryan Gosling, America Ferrera",
    img: "https://i.pinimg.com/736x/30/48/1e/30481e5d09a88700f9ad975c8ed0d21f.jpg",
  },
  "1d": {
    titulo: "Poor Things",
    genero: "Comédia · Romance · Ficção Científica",
    ano: "2023",
    sinopse: "A incrível história da evolução de Bella Baxter, uma jovem trazida de volta à vida pelo brilhante cientista Dr. Godwin Baxter.",
    elenco: "Emma Stone, Mark Ruffalo, Willem Dafoe",
    img: "https://i.pinimg.com/1200x/f1/28/42/f12842aaf1b0417ecddbb03e1be776b7.jpg",
  },
  "1e": {
    titulo: "Saltburn",
    genero: "Drama · Suspense",
    ano: "2023",
    sinopse: "Um estudante de Oxford se vê arrastado para o mundo de um colega aristocrático em uma propriedade de verão inesquecível.",
    elenco: "Barry Keoghan, Jacob Elordi, Rosamund Pike",
    img: "https://i.pinimg.com/736x/2d/41/e3/2d41e37be938c9390886092cf1410b17.jpg",
  },
  "2a": {
    titulo: "John Wick 4",
    genero: "Ação · Policial · Thriller",
    ano: "2023",
    sinopse: "John Wick descobre um caminho para derrotar a Alta Cúpula, mas precisa enfrentar um novo inimigo poderoso.",
    elenco: "Keanu Reeves, Laurence Fishburne, Donnie Yen",
    img: "https://i.pinimg.com/1200x/6e/50/a0/6e50a0bb3202e05cb9de75978b50e4a7.jpg",
  },
  "2b": {
    titulo: "Missão Impossível",
    genero: "Ação · Aventura",
    ano: "2023",
    sinopse: "Ethan Hunt e sua equipe do IMF embarcam na missão mais perigosa de suas vidas.",
    elenco: "Tom Cruise, Hayley Atwell, Ving Rhames",
    img: "https://i.pinimg.com/1200x/40/42/00/404200d6a15cb2b930e8e341da46243f.jpg",
  },
  "2c": {
    titulo: "Top Gun",
    genero: "Ação · Drama",
    ano: "2022",
    sinopse: "Depois de trinta anos, Maverick continua servindo como um dos principais aviadores da Marinha.",
    elenco: "Tom Cruise, Miles Teller, Jennifer Connelly",
    img: "https://i.pinimg.com/736x/10/91/ef/1091ef30c9b2777e089032ae6fd1d3df.jpg",
  },
  "2d": {
    titulo: "Mad Max",
    genero: "Ação · Aventura · Ficção Científica",
    ano: "2015",
    sinopse: "Em um mundo pós-apocalíptico, uma mulher se rebela contra um governante tirânico em busca de sua terra natal.",
    elenco: "Tom Hardy, Charlize Theron, Nicholas Hoult",
    img: "https://i.pinimg.com/1200x/93/d5/20/93d52028d3fd46a8099dd509dcc8529f.jpg",
  },
  "3a": {
    titulo: "Superbad",
    genero: "Comédia",
    ano: "2007",
    sinopse: "Dois estudantes do ensino médio lidam com a ansiedade da separação enquanto tentam ir a uma festa.",
    elenco: "Jonah Hill, Michael Cera, Christopher Mintz-Plasse",
    img: "https://i.pinimg.com/1200x/a4/86/50/a486504e8854d00e7fcb84506308a189.jpg",
  },
  "3b": {
    titulo: "The Grand Budapest",
    genero: "Comédia · Drama",
    ano: "2014",
    sinopse: "Um escritor relembra sua estadia em um grande hotel europeu e a amizade com seu lendário concierge.",
    elenco: "Ralph Fiennes, F. Murray Abraham, Mathieu Amalric",
    img: "https://i.pinimg.com/736x/c5/78/bf/c578bfb3862d2b35c84aa831fba6daa6.jpg",
  },
  "3c": {
    titulo: "Knives Out",
    genero: "Comédia · Crime · Drama",
    ano: "2019",
    sinopse: "Um detetive investiga a morte misteriosa do patriarca de uma família muito excêntrica.",
    elenco: "Daniel Craig, Chris Evans, Ana de Armas",
    img: "https://i.pinimg.com/736x/b7/91/f8/b791f8fad7ba685617032e5140cfd7f1.jpg",
  },
  "4a": {
    titulo: "Free Solo",
    genero: "Documentário · Esporte",
    ano: "2018",
    sinopse: "Alex Honnold tenta realizar a primeira escalada livre e sem cordas do vertiginoso El Capitan.",
    elenco: "Alex Honnold, Tommy Caldwell, Jimmy Chin",
    img: "https://i.pinimg.com/736x/47/67/4b/47674b76cea2d71a970915ea01ac225a.jpg",
  },
  "4b": {
    titulo: "The Social Dilemma",
    genero: "Documentário · Drama",
    ano: "2020",
    sinopse: "Especialistas em tecnologia alertam para os perigos do impacto humano causado pelas redes sociais.",
    elenco: "Tristan Harris, Jeff Seibert, Bailey Richardson",
    img: "https://i.pinimg.com/1200x/71/77/18/7177187de139c1db9c469b7a09979aa6.jpg",
  },
  "4c": {
    titulo: "My Octopus Teacher",
    genero: "Documentário",
    ano: "2020",
    sinopse: "Um cineasta estabelece uma amizade incomum com um polvo em uma floresta de algas sul-africana.",
    elenco: "Craig Foster",
    img: "https://i.pinimg.com/736x/5d/0a/1b/5d0a1b2dc410b81a48f39b54d03f260b.jpg",
  },
  "5a": {
    titulo: "Hereditary",
    genero: "Drama · Horror · Mistério",
    ano: "2018",
    sinopse: "Uma família em luto é assombrada por acontecimentos trágicos e perturbadores segredos.",
    elenco: "Toni Collette, Milly Shapiro, Gabriel Byrne",
    img: "https://i.pinimg.com/736x/18/05/80/1805801348473dd829d17d6f76e98ade.jpg",
  },
  "5b": {
    titulo: "Midsommar",
    genero: "Drama · Horror · Mistério",
    ano: "2019",
    sinopse: "Um casal viaja para a Suécia para um festival de verão que se transforma em um pesadelo perturbador.",
    elenco: "Florence Pugh, Jack Reynor, Vilhelm Blomgren",
    img: "https://i.pinimg.com/1200x/c0/75/e3/c075e3236ac661386c005e399e2252af.jpg",
  },
  "5c": {
    titulo: "Get Out",
    genero: "Horror · Mistério · Thriller",
    ano: "2017",
    sinopse: "Um jovem afro-americano visita a família de sua namorada e descobre um segredo aterrorizante.",
    elenco: "Daniel Kaluuya, Allison Williams, Bradley Whitford",
    img: "https://i.pinimg.com/736x/a1/3a/3c/a13a3c3d334f6511030c42f57cb571d8.jpg",
  },
};

export default function Filme() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const filme = (id && TODOS_OS_FILMES[id]) || {
    titulo: "Filme Não Encontrado",
    genero: "N/A",
    ano: "N/A",
    sinopse: "Informações não disponíveis.",
    elenco: "N/A",
    img: "",
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {filme.img ? (
          <Image source={{ uri: filme.img }} style={styles.poster} contentFit="cover" />
        ) : null}

        <View style={styles.info}>
          <Text style={styles.title}>{filme.titulo}</Text>
          <Text style={styles.subtitle}>{`${filme.genero} · ${filme.ano}`}</Text>

          <Text style={styles.section}>Sinopse</Text>
          <Text style={styles.text} numberOfLines={6}>
            {filme.sinopse}
          </Text>

          <Text style={styles.section}>Elenco</Text>
          <Text style={styles.text}>{filme.elenco}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#0B1120",
  },
  row: {
    flexDirection: "row",
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