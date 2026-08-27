import { View, Text, StyleSheet, ScrollView, Image, useWindowDimensions } from 'react-native';

export default function App() {
  const {width} = useWindowDimensions();
  const {height} = useWindowDimensions
  const alturaInicio = width < 1200 ? 820 : 1900;
  const alturalargura = height < 900 ? 900 : 500;

  return (
    <ScrollView style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Text style={styles.logo}>NETFLIX</Text>
      </View>

      {/* CAPA DO FILME */}
      <View style={styles.capa}>
        <Image
        source={{ uri: 'https://bunny-wp-pullzone-jxfodxhhei.b-cdn.net/wp-content/uploads/2025/12/matt-damon-as-odysseus-in-the-odyssey.jpg' }}
        style={[styles.header, {width: alturaInicio}, {height: alturalargura}]}
        />
      </View>

      {/* INFORMAÇÕES */}
      <View style={styles.informacoes}>

        <Text style={styles.titulo}>
          A Odisseia
        </Text>

        <Text style={styles.dados}>
          2026 • 16 anos • 2h 52min
        </Text>

        <Text style={styles.generos}>
          Ação • Fantasia
        </Text>

        {/* BOTÃO */}
        <View style={styles.botao}>
          <Text style={styles.textoBotao}>
            ▶  Assistir
          </Text>
        </View>

        {/* DESCRIÇÃO */}
        <Text style={styles.tituloDescricao}>
          A Odisseia
        </Text>

        <Text style={styles.descricao}>
        Após a Guerra de Troia, Odisseu embarca em uma 
        perigosa jornada de volta para Ítaca. No caminho, 
        o lendário guerreiro enfrenta deuses, criaturas míticas 
        e desafios que colocam à prova sua coragem e determinação, 
        enquanto luta para reencontrar sua esposa, Penélope.
        </Text>

        {/* DETALHES */}
        <Text style={styles.detalhes}>
          Direção: Christopher Nolan
        </Text>

        <Text style={styles.detalhes}>
          Elenco: Matt Damon, Tom Holland, Anne Hathaway, Robert Pattinson e Zendaya.
        </Text>

        <Text style={styles.detalhes}>
          Classificação: 16 anos
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },

  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  logo: {
    color: '#E50914',
    fontSize: 28,
    fontWeight: '900',
  },

  capa: {
    width: '100%',
    height: 380,
  },

  imagem: {
    width: 500,
    height: 500,
  },

  capaTitulo: {
    color: '#fff',
    fontSize: 55,
    fontWeight: '900',
    letterSpacing: 4,
  },

  capaAno: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },

  informacoes: {
    padding: 20,
  },

  titulo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  dados: {
    color: '#aaa',
    fontSize: 13,
    marginBottom: 8,
  },

  generos: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 18,
  },

  botao: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 13,
    alignItems: 'center',
    marginBottom: 25,
  },

  textoBotao: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },

  tituloDescricao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  descricao: {
    color: '#ddd',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 20,
  },

  detalhes: {
    color: '#888',
    fontSize: 12,
    marginBottom: 7,
  },
});