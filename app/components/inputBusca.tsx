import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function Busca() {
    return (

      <View >

         <TextInput style={styles.busca}
              placeholder='Busca...'
              /*value={texto} query necessario*/
             /* onChangeText={setTexto} */
              returnKeyType='search'
             /* onSubmitEditing={handleBuscar} */
              autoCapitalize='none'
              autoCorrect={false}
         />
    <TouchableOpacity style={styles.found}> OK </TouchableOpacity>
      </View>

    /*  {texto.lenght > 0 && (
        <TouchableOpacity
        
        >
        </TouchableOpacity>
      ) 
         }*/

    );
}

const styles = StyleSheet.create({

   busca:{
        width: '50%',
        height: '4.5%',
        backgroundColor: '#FAFA',
        marginTop: '5%',
        marginLeft: '10%',
        borderRadius: '7%',
        borderWidth: 3,
        borderColor: '#FAFAFAFA',
        fontSize: 20,
        alignSelf: 'auto',
        display: 'flex'
    },

    found:{
        width: '10%',
        height: '3%',
        backgroundColor: 'red',
        borderRadius: '7%',
        borderWidth: 3,
        borderColor: '#FAFAFAFA',
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        },
});
