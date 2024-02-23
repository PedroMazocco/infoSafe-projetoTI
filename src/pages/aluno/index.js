import { StyleSheet, Text, TextInput, TouchableOpacity, View , Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Aluno({navigation}){

  return(
    <View style={styles.container}> 
    <StatusBar style='light' />

      <Image 
      style={styles.logo}
      source={require('../../imagem/logo.png')}
      />

      <TouchableOpacity style={styles.botao}>
      <Text style={styles.mais} onPress={() => navigation.navigate('denuncia')}>+</Text>
      </TouchableOpacity>
    </View>
  );


}
const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#161618',
     justifyContent: 'center',
     color: 'white',
     alignItems: 'center',
   },

   logo:{
      width: 250,
      height: 200  
   },

   botao:{
      backgroundColor:'#86078f',
      position: 'absolute',
      width: 70,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
      borderRadius:100,
   },

   mais:{
      fontSize:50,
      color: 'white',
      fontWeight:'200',
   }

});
