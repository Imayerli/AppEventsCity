/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import LogIn from './components/LogIn';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}> HOLA MUNDO </Text>
    </SafeAreaView>
  );
}

export default App;

const styles =  StyleSheet.create({
  container:{
    flex:1,
    alignContent:'center',
    justifyContent:'center',
  },
  texto:{
    flex:1,
    fontSize:36
  }
}
)
