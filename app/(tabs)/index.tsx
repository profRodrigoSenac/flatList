import { View, Text, StyleSheet, FlatList, Image, useWindowDimensions, } from 'react-native';
import { Link } from 'expo-router';
import DadosdoFilme from '../components/DadosdoFilme';
import renderCategoria from '../components/CardCategorias'

const categorias=DadosdoFilme();

const sugestao = {
  id: '0',
  titulo: 'Carros',
  imagem:
    'https://images4.alphacoders.com/216/216804.jpg',
};


export default function App() {

  const {width} = useWindowDimensions();
  const alturaInicio = width < 600 ? 300 : 500;

  return (
    
    <View style={styles.app}>

      {/* FILME PRINCIPAL */}
      <View style={[styles.inicio, {height: alturaInicio}]}>
       <Link href={'/filme'}>

          <Image
            source={{ uri: sugestao.imagem }}
            style={[styles.imagemInicio, { height: alturaInicio }]}

          />

            <View style={styles.inicioTexto}>
              <Text style={styles.inicioTitulo}>
                {sugestao.titulo}
              </Text>

              <Text style={styles.inicioDescricao}>
                Um carro de corrida que sonha em se tornar o mais
                rápido do mundo acaba descobrindo o verdadeiro
                significado da amizade.
              </Text>
            </View>
       </Link>

      </View>

      {/* CATEGORIAS */}
      

      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoria}
      /> 

    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#141414',
  },

  inicio: {
    position: 'relative',
    overflow: 'hidden',
  },

  imagemInicio: {
    width: '100%',
  },

  inicioTexto: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },

  inicioTitulo: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  inicioDescricao: {
    color: '#dddddd',
    fontSize: 14,
    lineHeight: 20,
  },

  categoria: {
    marginTop: 20,
    marginBottom: 10,
  },

  categoriaTitulo: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  },

  filme: {
    width: 150,
    marginLeft: 15,
  },

  imagem: {
    width: 150,
    height: 220,
    borderRadius: 5,
  },

  titulo: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 7,
  },
});