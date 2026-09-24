import { router } from 'expo-router';
import { useState } from 'react';
import {View, StyleSheet, TextInput, Keyboard, TouchableOpacity} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function Busca() {
 
    const [texto, setTexto] = useState("");

    const Buscar = () => {
        const termo = texto.trim();
        if (!termo) return;

        Keyboard.dismiss();

        router.push({
            pathname: "/components/busca/"+termo,
            params: { query: termo },
        } as any);
      }

    return (

      <View style={styles.pesq} >

        <View style={styles.inpt}>
         <TextInput style={styles.busca}
              placeholder='Pesquisar...'
              placeholderTextColor='#FAFAFA'
              value={texto}
              onChangeText={setTexto} 
              returnKeyType='search'
              onSubmitEditing={Buscar} 
              autoCapitalize='none'
              autoCorrect={false}
         />
    <TouchableOpacity
                style={styles.botaoBusca}
                onPress={Buscar}
                activeOpacity={0.8}
            >
                <Ionicons name="search" size={20} color="#FFFFFF" />
            </TouchableOpacity>
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
</View>
    
    );
  }

const styles = StyleSheet.create({


  pesq:{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 10,
        gap: 10,
        width: "100%",
  },

   inpt:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1E293B",
        borderRadius: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "#334155",
        height: 44,
        color: "#F8FAFC",
        fontSize: 15,
    },

    busca: {
        flex: 1,
        height: 44,
        color: "#F8FAFC",
        fontSize: 15,
    },

    botaoLimpar: {
        padding: 7,
    },

    botaoBusca: {
        backgroundColor: "#E50914",
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});
