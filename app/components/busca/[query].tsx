import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";

export default function Busca() {
    const { query } = useLocalSearchParams();

    console.log("query recebido:", query);

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: query,
                    headerStyle: { backgroundColor: "rgb(93, 0, 7)" },
                    headerTintColor: '#FFFFFF',
                }}
            />
            <Text style={styles.texto}>Termo buscado: {query}</Text>
        </View>
    );
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