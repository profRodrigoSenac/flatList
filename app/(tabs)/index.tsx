import { View, StyleSheet, FlatList, Image } from 'react-native';
import DadosDosFilmes from '../components/DadosDosFilmes';
import CardCategorias from '../components/CardCategorias';
import InputBusca from '../components/inputBusca';

const categorias = DadosDosFilmes();


export default function App() {
    return (
        <View style={styles.corFundo}>
            <InputBusca></InputBusca>
            <FlatList
                data={categorias}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <CardCategorias item={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    corFundo: {
        flex: 1,
        backgroundColor: "black"
    },
});




