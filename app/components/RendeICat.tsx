import{View, Image, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Link, useLocalSearchParams } from 'expo-router';


export default function renderCategoria({ item } : {item:any}) {
  const {id} = useLocalSearchParams ();

  return (
    <View style={styles.categoria}>
      {item.titulo}
      <FlatList
      data={item.filmes}
      keyExtractor={filme => filme.id}
      horizontal={true}
      renderItem={({ item }) => (
        <Link href={`/components/filmes/${item.id}`}>
       <TouchableOpacity style={styles.bott}>     
          <View>
            <Image  
            source = {{uri: item.Imagem}}
            style={styles.filmage}
            />
              <Text style={styles.filmeTitulo}>{item.titulo}</Text>
          </View>
           </TouchableOpacity>
        </Link>
      )}
      />     
    </View>
    )
}

const styles = StyleSheet.create({

    backcolor:{
    backgroundColor: '#000000',
    flex: 1,
  },

  cont1:{
    fontSize: 30,
    color:'#ffff',
    margin: 20,
  },

  bott:{
    height: '100%',
    padding: 5,
    marginRight: 25,
    borderRadius: 20, 
    marginTop: 4
  },

  categoria:{
    color:'#ffff',
    fontSize: 24,
    fontFamily:'Arial',
    height: 335,
    padding: 15,
    margin: 10,
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: '#47221e',
    
  },
  
  filmage:{
    width: 150, 
    height: 210,
    backgroundColor: '#000',
    borderRadius: 15,
    justifyContent: 'flex-end',
  },

  filmeTitulo:{
    color: '#fff',
    fontSize: 20,
    marginLeft: 5
  }
       
});

