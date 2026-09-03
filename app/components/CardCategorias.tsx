import {View, Image, FlatList, StyleSheet, Text} from "react-native"
import { Link } from "expo-router";

export default function renderCategoria({ item, width }: { item: any; width: number }){
    const imagemLargura = width < 600 ? 150 : 180;
    const imagemAltura = imagemLargura * 1.50;
      
        return (
          <View style={styles.categoria}>
      
            <Text style={styles.categoriaTitulo}>
              {item.titulo}
            </Text>
      
            <FlatList
              data={item.filmes}
              keyExtractor={(filme) => filme.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={[styles.filme, { width: imagemLargura }]}>
                  <Link  href="/filme" >
                    <Image
                      source={{ uri: item.imagem }}
                      style={[
                        styles.imagem,
                        {
                          width: imagemLargura,
                          height: imagemAltura,
                        },
                      ]}
                    />
                    <Text style={styles.titulo}>
                      {item.titulo}
                    </Text>
                  </Link>
      
                </View>
              )}
            />
      
          </View>
        );
    }

                    const styles = StyleSheet.create({
                        app: {
                          flex: 1,
                          backgroundColor: '#141414',
                        },
                      
                        inicio: {
                          position: 'relative',
                          overflow: 'hidden',
                        },
                      
                        imagemInicio: {
                          width: '100%',
                        },
                      
                        inicioTexto: {
                          position: 'absolute',
                          bottom: 20,
                          left: 20,
                          right: 20,
                        },
                      
                        inicioTitulo: {
                          color: '#ffffff',
                          fontSize: 32,
                          fontWeight: 'bold',
                          marginBottom: 8,
                        },
                      
                        inicioDescricao: {
                          color: '#dddddd',
                          fontSize: 14,
                          lineHeight: 20,
                        },
                      
                        categoria: {
                          marginTop: 20,
                          marginBottom: 10,
                        },
                      
                        categoriaTitulo: {
                          color: '#ffffff',
                          fontSize: 22,
                          fontWeight: 'bold',
                          marginLeft: 15,
                          marginBottom: 10,
                        },
                      
                        filme: {
                          width: 150,
                          marginLeft: 15,
                        },
                      
                        imagem: {
                          width: 150,
                          height: 220,
                          borderRadius: 5,
                        },
                      
                        titulo: {
                          color: '#ffffff',
                          fontSize: 14,
                          fontWeight: 'bold',
                          marginTop: 7,
                        },
                      });