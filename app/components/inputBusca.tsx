import React, { useState } from "react";
import {    View,    TextInput,    TouchableOpacity,    StyleSheet,    Keyboard, Text} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";


export default function InputBusca({
    placeholder = "Buscar filmes..."
}) {


    const [texto, setTexto] = useState("");

    const Buscar = () => {
        const termo = texto.trim();
        if (!termo) return;

        Keyboard.dismiss();

        router.push({
            pathname: "/components/busca/"+termo,
            params: { query: termo },
        } as any);
        
    };

    return (
        <View style={styles.container}>
                        
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="#878485"
                    value={texto}
                    onChangeText={setTexto}
                    returnKeyType="search"
                    onSubmitEditing={Buscar}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                {texto.length > 0 && (
                    <TouchableOpacity
                        style={styles.botaoLimpar}
                        onPress={() => setTexto("")}
                        activeOpacity={0.7}
                    >
                        <Ionicons name="close-circle" size={18} color="#94A3B8" />
                    </TouchableOpacity>
                )}
            </View>

            <TouchableOpacity
                style={styles.botaoBusca}
                onPress={Buscar}
                activeOpacity={0.8}
            >
                <Ionicons name="search" size={20} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 10,
        gap: 10,
        width: "100%",
    },
    inputWrapper: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1E293B",
        borderRadius: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "#334155",
    },
    input: {
        flex: 1,
        height: 44,
        color: "#F8FAFC",
        fontSize: 15,
    },
    botaoLimpar: {
        padding: 4,
    },
    botaoBusca: {
        backgroundColor: "#E50914",
        width: 44,
        height: 44,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});
