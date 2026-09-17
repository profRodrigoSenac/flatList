import {useLocalSearchParams, Stack} from "expo-router"
import {View, StyleSheet, Text} from 'react-native';

export default function Busca() {
    const {query} = useLocalSearchParams()

    console.log("query recebido:", query);

    return(
        <View>
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


