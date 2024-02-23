import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import {addDoc, collection, getDocs} from "firebase/firestore"
import { db } from '../../services/firebase';

export default function Cadastro2({navigation}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  async function CreateUser() {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha)
        console.log('cadastrado \n' + userCredential.user.uid); 
        if (!isValidEmail(email)) {
          alert('E-mail inválido! Por favor, insira um e-mail válido.');
          return;
      }        
      const users = await addDoc(userCollectionRef, {
        nome, 
        email,
        senha, 
        telefone
      })
      console.log(users);
      navigation.navigate('cadastro');   


      } catch (error) {
      console.log(error);
      alert('Cadastro Inválido!')

    }
      }
  const userCollectionRef = collection(db, "usuario");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data.docs.map(((doc) => ({...doc.data(), id: doc.id}))));
    }
    getUsers();
  },[])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Animatable.Image
        style={styles.infosafe}
        source={require('../../imagem/infosafe.png')}
        animation="fadeInDown"
        delay={300}
      />

      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome completo"
        autoCapitalize="none"
        placeholderTextColor={'white'}
      />

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        keyboardType="email-addres"
        autoCapitalize="none"
        placeholderTextColor={'white'}
      />

      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Telefone"
        keyboardType="phone-pad"
        placeholderTextColor={'white'}
      />

      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Senha"
        placeholderTextColor={'white'}
        secureTextEntry
      />

      <TouchableOpacity style={styles.cadastro} onPress={CreateUser}>
        <Text style={styles.cadastroText}>CADASTRAR-SE</Text>
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

  infosafe:{
    width: 300,
    height: 300,
  },

  input:{
    borderRadius: 20,
    width: '90%',
    height: 75,
    margin: 27,
    borderWidth: 1,
    borderColor: '#86078f',
    padding: 15,
    color: 'white',
    top: -110,
    alignSelf: 'flex-start',
    marginHorizontal: 10 ,   
  },

  cadastro:{
    backgroundColor: '#86078f',
    padding: 20,
    borderRadius: 15,
    top: -95,
  },

  cadastroText:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },

  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    top: -90,
      
  },

});

