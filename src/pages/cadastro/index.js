import  React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function Cadastro({navigation}) {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      
      <TouchableOpacity style={styles.entrar} onPress={() => navigation.navigate('login')}>
        <Text style={styles.entrarText}>ENTRAR COMO ALUNO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.entrar} onPress={() => navigation.navigate('loginResponsavel')}>
        <Text style={styles.entrarText}>ENTRAR COMO RESPONSÁVEL</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.entrar} onPress={() => navigation.navigate('cadastro2')}>
        <Text style={styles.cadastroText}>CADASTRAR-SE</Text>
      </TouchableOpacity>

      <Animatable.Image 
      delay={300}
      style={styles.coruja} 
      source={require('../../imagem/coruja.png')}
      animation='flipInY'
      />

      <Animatable.Image 
      style={styles.infosafe} 
      source={require('../../imagem/infosafe.png')}
      animation='fadeInUp'
      delay={500}
      />

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

  entrar:{
    backgroundColor: '#86078f', 
    padding: 20,
    top: 340,
    width: 250,
    borderRadius: 15,
    margin: 15,
  },

  entrarText:{
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },

  cadastroText:{
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },

  coruja:{
    width: 300,
    height: 300,
    top: -280,
  },

  infosafe:{
    width: 250,
    height: 250,
    top: -10,
  },
});