import React from "react";

import { Text, Card } from '@rneui/themed';
import { Icon } from '@rneui/themed';
import {  View, StyleSheet, Image ,Linking} from 'react-native';


export default function myIcon(props){
return(
  <Icon name={props.name} style={styles.iconSyle} onPress={() => {Linking.openURL(props.url)}}></Icon>
);
}

const styles = StyleSheet.create({
iconSyle:{
backgroundColor:'',
borderRadius: 20,
 marginRight:5,
}
});