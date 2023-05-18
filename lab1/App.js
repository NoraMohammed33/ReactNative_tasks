import * as React from 'react';
import { Text,Image, View,ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import MyIcon from './components/Icons';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    
      <View style={styles.container}>
        <Image source={require('./noor.jpeg')} style={styles.myimage} />
        <Text style={styles.paragraph}>
             Nora Mohammed
        </Text>
        <Text style={{color:'gray'}}>
             Full Stack Developer
        </Text>

        <MyIcon name='facebook'/>


      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: 'black',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white'
  },
  myimage:{
    width:150,
    height:150,
    borderRadius:80
  }
});
