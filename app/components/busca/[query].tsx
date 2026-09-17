import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { StackScreen } from "react-native-screens";
import { StyleSheet, useWindowDimensions, query } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    }
});

export default function App() {
    const { query } = useLocalSearchParams();
    const {width} = useWindowDimensions();
    const {height} = useWindowDimensions();
    const alturaInicio = width < 1200 ? 820 : 1900;
    const alturalargura = height < 900 ? 900 : 500;
}

console.log("Query:", query);

return (
    <View style={styles.container}>
        <StackScreen
        options={{
            title: query,
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTintColor: '#fff',
        }}
    />
    <Text style={styles.titulo}>Resultados da busca para: {query}</Text>
    </View>
);   
