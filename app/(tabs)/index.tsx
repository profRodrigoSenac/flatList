import {View, StyleSheet, FlatList} from 'react-native';
import CategoriasFilme from '../components/DadosFilme';
import renderCategoria from '../components/RendeICat';
import Busca from "../components/inputBusca"
/* TextInput*/

const categorias=CategoriasFilme();
console.log(categorias);


export default function App() {
    return (

      <View style={styles.backcolor}>
          <Busca></Busca>
        <FlatList
          data={categorias}
          keyExtractor={i => i.id}
          renderItem={renderCategoria }
        />
      </View>

    );
}

const styles = StyleSheet.create({

 busca:{
        width: '50%',
        height: '4.5%',
        backgroundColor: '#FAFA',
        marginTop: '5%',
        marginLeft: '10%',
        borderRadius: '7%',
        borderWidth: 3,
        borderColor: '#FAFAFAFA',
        fontSize: 20,
        alignSelf: 'auto',
        display: 'flex'
    },

    found:{
        width: '10%',
        height: '3%',
        backgroundColor: 'red',
        borderRadius: '7%',
        borderWidth: 3,
        borderColor: '#FAFAFAFA',
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        },

    backcolor:{
    backgroundColor: '#000000',
    width:'100%',
    height:'100%',
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
    height: '100%',
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
