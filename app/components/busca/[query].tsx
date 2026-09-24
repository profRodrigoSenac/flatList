import {useLocalSearchParams, Stack} from "expo-router"
import {View, StyleSheet, Text} from 'react-native';

export default function Busca() {
    const {query} = useLocalSearchParams()

    console.log("query recebido:", query);

    return(
        <View style={styles.container}>
            <Stack.Screen
            options={{
                title: query,
                headerStyle: {backgroundColor: 'black'},
                headerTintColor: '#FFF'
            }}
            />

            <Text style={styles.texto}>Termo Buscado: {query}</Text>
        </View>
    )

}
const styles = StyleSheet.create({

       container: {
        flex: 1,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    texto: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "600",
    },
});
