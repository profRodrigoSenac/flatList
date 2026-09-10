import { useLocalSearchParams } from "expo-router";
import CategoriasFilme from "../DadosFilme";
import { Link } from 'expo-router';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';


export default function App() {
    const {id} = useLocalSearchParams();

console.log('ID recebido', id)

const categorias = CategoriasFilme();
const filmeEncontrado = categorias
.flatMap((categoria) => categoria.filmes)
.find((f) => f.id === id);

console.log('Filme encontrado:', filmeEncontrado);
    return (
    <View style={styles.boxfilm}>

         <View style={styles.bigwach}>

            <View style={styles.boximgFilm}>
                <Image
                    source={{ uri: filmeEncontrado?.Imagem }}
                    style={styles.imgFilm}
                >
                </Image>
            </View>
        

            <View style={styles.watchfilm}>
                <Text style={styles.titolofilm}>{filmeEncontrado?.titulo}</Text>
                <Text style={styles.textfilm}>Lançamento:  {filmeEncontrado?.ano} 
                <Text style={styles.duration}>  {filmeEncontrado?.duracao}   </Text>
                 <Text style={styles.age}>  {filmeEncontrado?.age} </Text></Text>

        <View style={styles.bots}>
            <Link href={'/(tabs)/flat'}>
                <TouchableOpacity style={styles.startFilm}> Assistir </TouchableOpacity>

                <TouchableOpacity style={styles.backsee}> + Lista de filmes </TouchableOpacity>
            </Link>
            <View style={styles.Fav}>
                     <TouchableOpacity style={styles.backsee2}> </TouchableOpacity>
                     <Text style={styles.textfav}>Favoritar</Text>
            </View>
        </View>
        
                <Text style={styles.descFilm}><Text style={styles.sino}>{filmeEncontrado?.sinopse}</Text> </Text>

             </View>

        </View>

    </View>
    )
}

const styles = StyleSheet.create({

    boxfilm: {
        backgroundColor: '#2f3e3a',
        flex: 1,
        width: '100%',
        margin: 'auto',
    },

    bigwach:{
        flex: 2,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },

    watchfilm:{
        width: '50%',
    },

    sino:{
        fontSize: 22,
    },

    boximgFilm: {
        width: '50%',
        height: 700,
        marginTop: 25,
    },

    imgFilm: {
        marginTop: '5%',
        width: '100%',
        height: '90%',
        borderRadius: 20,
    },

    textfilm: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '18%',
        marginRight: '2%',
        alignSelf: 'center',
    },

    age:{
        width: 25,
        height: 20,
        backgroundColor: 'red',
        borderBottomLeftRadius: 10,
    },

    duration: {
        color: 'yellow',
        fontWeight: 'bold',
    },

    titolofilm: {
        color: 'white',
        textDecorationLine: 'underline',
        textDecorationColor: '#ff2020a1',
        marginLeft: 50,
        fontSize: 50,
        fontWeight: 'bold',
        width: 500,
        marginTop: 50,
    },

    descFilm: {
        color: 'white',
        textAlign: 'justify',
        fontSize: 19,
        margin: 14,
    },

    bots:{
        
    },

    startFilm: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        width: 150,
        height: 40,
        color: 'white',
        textAlign: 'center',
        paddingTop: 9,
        marginTop: 40,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#aab41ec5',
        marginLeft: 50,
        marginRight: 20,
        fontSize: 18
    },

    backsee:{
        color: 'white',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        width: 170,
        height: 42,
        textAlign: 'center',
        paddingTop: 9,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#1e71b4',
        marginLeft: 26,
        fontSize: 18,

    },

    Fav:{
        width:'50%',
        height:'50%',
        margin: 'auto',
        justifyContent: 'center',
        display:'flex',
        marginBottom: '5%'
    },
    
    backsee2:{
        color: 'black',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        width: 30,
        height: 30,
        textAlign: 'center',
        paddingTop: 9,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#ac961c',
        marginLeft:'20%',
        fontSize: 18,
        marginTop: 30,
    },
    

    textfav:{
        fontSize: 22,
        color: 'white',
        marginLeft: '40%',
        marginTop: '-14%',
    }
    
});



