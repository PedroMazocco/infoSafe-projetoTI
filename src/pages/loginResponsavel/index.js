import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View , Image} from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function LoginResponsavel({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'usuario@exemplo.com' && password === 'senha123') {
      navigation.navigate("responsavel") 
    } else {
      alert('E-mail ou senha inválidos!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor={'white'}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry
        placeholderTextColor={'white'}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>


      <Animatable.Image
        style={styles.logo} 
        source={require('../../imagem/logo.png')}
        animation='flipInX'
        delay={300}
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


  input: {
    borderRadius: 15,
    width: '80%',
    height: 70,
    margin: 15,
    borderWidth: 1,
    borderColor: '#86078f',
    padding: 15,
    color: 'white',
    top: 275,
    
  },

  button: {
    backgroundColor: '#86078f',
    padding: 20,
    borderRadius: 15,
    top: 280,
    margin: 10,
  
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf:'center'
  },

  logo:{
    top: -300,
  },
   
});