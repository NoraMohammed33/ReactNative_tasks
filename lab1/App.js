import React, { useState,ImageBackground,ColorBackground } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import {ScrollView, Linking } from 'react-native';
import { Button } from '@rneui/themed';
import  MyIcon  from './components/myicone';
import  MySkill  from './components/myskill';
import  MyInfo  from './components/myinfo';
import { Icon } from '@rneui/themed';

export default function App() {
  return (
    <ScrollView >
    <View style={styles.container}>
    
        <Image source={require('./noor.jpeg')} style={styles.photo}/>
        <Text style={{color:'black',fontWeight:'500'}}>Nora Mohammed </Text>
        <Text style={{marginBottom:10,color:'gray'}}>Full stack developer</Text>

        <View style={styles.myRow}>
          <MyIcon name="facebook"  url="https://www.facebook.com" />
          <MyIcon name="facebook"  url="https://www.facebook.com" />
          <MyIcon name="facebook"  url="https://www.facebook.com" />
          <MyIcon name="facebook"  url="https://www.facebook.com" />
        </View>
         <Text style={{marginTop:5,color:'white'}}
        >-------------------------------------------------</Text>

<View style={styles.myCol}>
<MyInfo title="Age" value="23"/>
<MyInfo title="Recidence" value="BD"/>
<MyInfo title="Freelancer" value="available"/>
<MyInfo title="Address" value="Cairo , Egypt"/>
</View>

<Text style={{color:'green',fontWeight:'500'}}>Skills</Text>
<View style={styles.myCol}>
<MySkill name="html" percentage="90"/>
<MySkill name="css" percentage="80"/>
<MySkill name="js" percentage="40"/>
<MySkill name="php" percentage="90"/>
<MySkill name="wordpress" percentage="60"/>


</View>

<Text style={{color:'blue',fontWeight:'500'}}>Languages</Text>
<View style={styles.myCol}>
<MySkill name="French" percentage="90"/>
<MySkill name="English" percentage="80"/>
<MySkill name="Arabic" percentage="40"/>
<MySkill name="Spanish" percentage="90"/>

</View>

<Button color="green" style={{marginTop:'50'}}>Download CV</Button> 
  <Icon name=""></Icon>
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: 'center',
    marginTop:50,
    backgroundColor: 'white',
  },
  photo:{
        marginTop:50,
        width: 170,
        height: 170,
        borderRadius: 80
  },
  myRow:{
   
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  myCol:{
    justifyContent: 'space-evenly',
    flexDirection: 'column'
  }
});
