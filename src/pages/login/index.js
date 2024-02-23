import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View , Image} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () =>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigation.navigate("aluno") 
      console.log('Login successful!')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Login invalido!')
    });
  } 
  

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
      <TouchableOpacity style={styles.button} onPress={signIn}>
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