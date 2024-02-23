import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { db } from '../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Responsavel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const denunciaCollection = collection(db, 'denuncia');
          const querySnapshot = await getDocs(denunciaCollection);
          const fetchedData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
          setData(fetchedData);
      } catch (error) {
          console.error("Erro ao buscar dados:", error);
      }
  };

      fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.lista}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
          <Text style={styles.titulo}>NOME: </Text>
            <Text style={styles.texto}>{item.nome}</Text>
          <Text style={styles.titulo}>DATA: </Text>
            <Text style={styles.texto}>{item.date}</Text>
          <Text style={styles.titulo}>HORA: </Text>
            <Text style={styles.texto}>{item.hora}</Text>
          <Text style={styles.titulo}>LOCAL: </Text>
            <Text style={styles.texto}>{item.local}</Text>
          <Text style={styles.titulo}>DESCRIÇÃO: </Text>
            <Text style={styles.texto}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161618',
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  texto:{
    color: 'white',
    marginTop: 5,
    fontSize:20,
    marginLeft: 5
  },
  titulo:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop:15,
    marginLeft: 5
  },

    
});






