import { View, Text, StyleSheet, FlatList, Image, useWindowDimensions } from 'react-native';

const sugestao = {
  id: '0',
  titulo: 'Carros',
  imagem:
    'https://static.wikia.nocookie.net/disney/images/7/79/Cars-disneyscreencaps.com-5057.jpg/revision/latest?cb=20150306225308',
};

const categorias = [
  {
    id: '1',
    titulo: 'Em Alta',
    filmes: [
      {
        id: '1a',
        titulo: 'Odisseia',
        imagem:
          'https://tse4.mm.bing.net/th/id/OIP.Y3U2Gjf7myKgpadatB0WpgHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      },
      {
        id: '1b',
        titulo: 'Homem Aranha: Um novo dia',
        imagem:
          'https://th.bing.com/th/id/R.07e86fca27e0c58e48c8c99560e5158f?rik=y1ymKP4w3xhGTQ&riu=http%3a%2f%2falangeek.com.br%2fwp-content%2fuploads%2f2026%2f05%2fhomem-aranha-um-novo-dia.webp&ehk=1uB0XLKxTC%2bFzYo5dWX0TtYf9jFMDqrLv%2bhkkfXzXk8%3d&risl=&pid=ImgRaw&r=0',
      },
      {
        id: '1c',
        titulo: 'Moana: Live action',
        imagem:
          'https://www.billboard.com/wp-content/uploads/2026/03/moana-live-action-poster-2026-billboard-embed.jpg',
      },
      {
        id: '4d',
        titulo: 'O Diabo Veste Prada 2',
        imagem:
          'https://image.tmdb.org/t/p/w185/50yWyY981TyUHhoxxSEKwO70FmQ.jpg',
      },
    ],
  },

  {
    id: '2',
    titulo: 'Ação',
    filmes: [
      {
        id: '2a',
        titulo: 'John Wick 4',
        imagem:
          'https://medialb.ultimedia.com/multi/3rpkx/q8skz8f-O.jpg',
      },
      {
        id: '2b',
        titulo: 'Missão Impossível',
        imagem:
          'https://image.tmdb.org/t/p/original/hBKxN5Z8gRo2am0whMeQlPv19K4.jpg',
      },
      {
        id: '2c',
        titulo: 'Deadpool',
        imagem:
          'https://tse3.mm.bing.net/th/id/OIP.TIKIoeRrqa560SoLZs6ghgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      },
      {
        id: '2d',
        titulo: 'Agente oculto',
        imagem:
          'https://tse4.mm.bing.net/th/id/OIP.2HyVMg8-l8Sl4NabJMRcQQHaK9?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      },
    ],
  },

  {
    id: '3',
    titulo: 'Comédia',
    filmes: [
      {
        id: '3a',
        titulo: 'Gente Grande',
        imagem:
          'https://m.media-amazon.com/images/M/MV5BZjEzM2U4NTQtNTdmMi00MDU1LWEzM2YtODcwNDkzZWE5YjhlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      },
      {
        id: '3b',
        titulo: 'As Branquelas',
        imagem:
          'https://tse3.mm.bing.net/th/id/OIP.zcE46xXMtWk7K-Na10KMQQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      },
      {
        id: '3c',
        titulo: 'Gente Grande 2',
        imagem:
          'https://m.media-amazon.com/images/S/pv-target-images/2a3f6cb67f075fe121786f74d623d4164e4d15d87dc7f5b2b64a571f026d8693.jpg',
      },
      {
        id: '3d',
        titulo: 'Minha Mãe É Uma Peça',
        imagem:
          'https://images.justwatch.com/poster/244868796/s718/minha-mae-e-uma-peca-o-filme.jpg',
      },
    ],
  },
];

export default function App() {

  const {width} = useWindowDimensions();
  const alturaInicio = width < 600 ? 300 : 500;

  return (
    <View style={styles.app}>

      {/* FILME PRINCIPAL */}
      <View style={[styles.inicio, {height: alturaInicio}]}>

      <Image
        source={{ uri: sugestao.imagem }}
        style={[styles.imagemInicio, { height: alturaInicio }]}
        resizeMode="cover"
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

      </View>

      {/* CATEGORIAS */}
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <Categoria item={item} width={width} />
        )}
      />

    </View>
  );
}

function Categoria({ item, width }: { item: any; width: number }) {
  const imagemLargura = width < 600 ? 150 : 180;
  const imagemAltura = imagemLargura * 1.70;

  return (
    <View style={styles.categoria}>

      <Text style={styles.categoriaTitulo}>
        {item.titulo}
      </Text>

      <FlatList
        data={item.filmes}
        keyExtractor={(filme) => filme.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={[styles.filme, { width: imagemLargura }]}>

            <Image
              source={{ uri: item.imagem }}
              style={[
                styles.imagem,
                {
                  width: imagemLargura,
                  height: imagemAltura,
                },
              ]}
            />

            <Text style={styles.titulo}>
              {item.titulo}
            </Text>

          </View>
        )}
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