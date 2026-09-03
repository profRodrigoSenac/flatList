import {View, StyleSheet, FlatList, Image} from 'react-native';
import DadosDosFilmes from '../components/DadosDosFilmes';
import renderCategoria from '../components/CardCategorias';

const categorias=DadosDosFilmes();


export default function App() {
    return (
        <View style={styles.corFundo}>
            <FlatList
                        data={categorias}
                        keyExtractor={item => item.id}
                        renderItem={renderCategoria}
                    />
        </View>
    );
}

const styles = StyleSheet.create({
       corFundo:{
        flex:1,
        backgroundColor:"black"
       },              
});




