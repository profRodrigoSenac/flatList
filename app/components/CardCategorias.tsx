import { View, Text, Image, FlatList, StyleSheet } from "react-native";


export default function renderCategoria({ item }: { item: any }) {
  return (
    <View style={styles.categorias}>
      <Text style={styles.filmeTitulo}>{item.titulo}</Text>
      <FlatList
        data={item.filmes}
        keyExtractor={filme => filme.id}
        horizontal={true}
        // showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.imagem }}
            style={[styles.filme]}
          >
          </Image>

        )}
      > </FlatList>

    </View>
  )
}

const styles = StyleSheet.create({
  categorias: {
    color: "white",
    backgroundColor: '#000000'
  },
  filme: {
    width: 100,
    height: 140,
    borderRadius: 8,
    margin: 5,
    justifyContent: 'flex-end',
    padding: 8
  },
  filmeTitulo: {
    color: 'white',
    fontSize: 12
  }
});
