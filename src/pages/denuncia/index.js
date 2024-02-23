import { Text, View, StyleSheet, TextInput, TouchableOpacity, Platform, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { db } from '../../services/firebase';
import {addDoc, collection, getDocs} from "firebase/firestore"

export default function Denuncia({navigation}) {
  const [text, setText] = useState('');
  const [local, setLocal] = useState('');
  const [date, setDate] = useState('');
  const [hora, setHora] = useState('');
  const [nome, setNome] = useState('');

  async function handleSaveText() {
    try {
      const save = await addDoc(userCollectionRef, {
        text,
        local,
        date,
        hora,
        nome
      })
      console.log(save)
      alert('Denúncia cadastrada!')
      navigation.navigate('aluno');   
    } catch (error) {
      console.log(error);
      alert('Cadastro de denúncia inválido!')
    }
      }
  const userCollectionRef = collection(db, "denuncia");
  
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

      <Text style={styles.texto}>Inserir seu nome completo: </Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome..."
        autoCapitalize="none"
        placeholderTextColor={'gray'}
      />

      <Text style={styles.texto}>Inserir descrição: </Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Descrição..."
        autoCapitalize="none"
        placeholderTextColor={'gray'}
      />

      <Text style={styles.texto}>Inserir Local: </Text>
      <TextInput
        style={styles.input}
        value={local}
        onChangeText={setLocal}
        placeholder="Local..."
        autoCapitalize="none"
        placeholderTextColor={'gray'}
      />
     
      <Text style={styles.texto}>Inserir Data: </Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Data..."
        autoCapitalize="none"
        placeholderTextColor={'gray'}
      />  

      <Text style={styles.texto}>Inserir Hora: </Text>
      <TextInput
        style={styles.input}
        value={hora}
        onChangeText={setHora}
        placeholder="Hora..."
        autoCapitalize="none"
        placeholderTextColor={'gray'}
      />   

      <TouchableOpacity style={styles.registrar} onPress={handleSaveText}>
        <Text style={styles.registrarText}>REGISTRAR DENÚNCIA</Text>
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

    texto:{
        color: 'white',
        top: -15,
        alignSelf: 'flex-start',
        marginLeft: 15,
        fontSize:18,
        margin:35,
        fontWeight:'bold',
    },

    input:{
        color: 'white',
        alignSelf: 'flex-start',
        marginLeft: 15,
        top:-40,
    },
    registrar:{
        backgroundColor: '#86078f',
        padding: 20,
        borderRadius: 15,
        top: -15,
      }, 
    
      registrarText:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
      },

});