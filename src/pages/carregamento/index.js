import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, Image, Modal, ActivityIndicator } from 'react-native';

export default function Carregamento({visible}) {
  return (
    <Modal transparent visible={visible}>
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image style={styles.coruja} source={require('../../imagem/coruja.png')}/>
      <Image style={styles.infosafe} source={require('../../imagem/infosafe.png')}/>
    </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161618',
    alignItems: 'center',
    justifyContent: 'center',
  },

  coruja:{
    top: 120,
    width: 700,
    height: 700,
    alignSelf: 'flex-end',
    margin: 15,
  },

  infosafe:{
    width: 250,
    height: 250,
    top: -60,
  },
});
