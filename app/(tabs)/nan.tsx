import { Link } from 'expo-router';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';


export default function App() {
    return (

    <View style={styles.boxfilm}>

         <View style={styles.bigwach}>

            <View style={styles.boximgFilm}>
                <Image
                    source={{ uri: 'https://www.movietele.it/wp-content/uploads/2022/12/Oppenheimer-di-Christopher-Nolan-Poster-VOD.jpeg' }}
                    style={styles.imgFilm}
                >
                </Image>
            </View>
        

            <View style={styles.watchFilm}>
                <Text style={styles.titolofilm}>Oppenheimer</Text>
                <Text style={styles.textfilm}>2023 Duração de <Text style={styles.duration}>3h</Text><Text style={styles.age}>16</Text></Text>

            <Link href={'/(tabs)/flat'}>
                <TouchableOpacity style={styles.startFilm}> Assistir </TouchableOpacity>
            </Link>
                <Text style={styles.descFilm}> <Text style={styles.sino}>Sinopse</Text>
                    O longa-metragem de 2023, dirigido por Christopher Nolan,
                    é uma adaptação da biografia "American Prometheus", 
                    escrita por Kai Bird e Martin J. Sherwin. 
                    O filme foca na vida de J. Robert Oppenheimer,
                    um físico teórico americano que é amplamente reconhecido como o
                    "pai da bomba atômica".   
                </Text>

             </View>

        </View>

    </View>
    )
}

const styles = StyleSheet.create({

    boxfilm: {
        backgroundColor: '#2f3e3a',
        flex: 1,
    },

    bigwach:{
        flex: 2,
        justifyContent: 'space-around'
    },

    wachfilm:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    boximgFilm: {
        width: '50%',
        height: 700,
        marginTop: 25,
        marginLeft: '45%',
    },

    imgFilm: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },

    textfilm: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
        alignSelf: 'center',
    },

    age:{


    },

    sino:{


    },

    duration: {
        color: 'yellow',
        fontWeight: 'bold',
    },

    titolofilm: {
        color: 'white',
        textDecorationLine: 'underline',
        textDecorationColor: 'red',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        width: 200,
    },

    descFilm: {
        color: 'white',
        textAlign: 'justify',
        fontSize: 15,
        margin: 17,
    },

    startFilm: {
        color: 'black',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        width: 100,
        height: 40,
        backgroundColor: '#dbdbe2',
        textAlign: 'center',
        paddingTop: 9,
        marginTop: 40,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#5f0000',
        alignSelf: 'center',
    },





});