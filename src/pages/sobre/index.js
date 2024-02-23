import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function Sobre() {
  return (
    <View style={styles.container} >
        <Animatable.Text style={styles.paragraph} animation='bounceInDown' delay={1000}>
        O aplicativo Info Safe foi desenvolvido {'\n'} 
        por um grupo de alunos egressos do {'\n'}
        Instituto Federal de Santa Catarina, {'\n'}
        cursantes do Ensino Médio Integrado {'\n'}
        ao Técnico em Informática, no período {'\n'} 
        entre 2021 a 2023; com o intuito de {'\n'}
        relatar denúncias relacionadas a {'\n'} 
        situações de violência ocorridas {'\n'} 
        dentro do ambiente acadêmico.
        </Animatable.Text>
      <Animatable.Image 
      style={styles.imagem} 
      source={require('../../imagem/coruja.png')}
      animation='flipInX'
      delay={600}
      />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignContent: 'center'
  },


  sobre:{
    color: 'white',
    backgroundColor: '#86078f',
    fontSize: 20,
    paddingHorizontal: 150,
    paddingVertical: 20,
    borderRadius: 40,
    top: 30
  },


  paragraph: {
    color: '#808080',
    fontSize: 19,
    top: 80,
    paddingVertical: 5,
    alignContent: 'center',
    textAlign: 'center'
  },

  imagem:{
    width:260,
    height:210, 
    top: 130, 
    paddingVertical:10, 
    alignSelf:'center'
  },
});
