import React from "react";

import { Text, Card } from '@rneui/themed';
import { Icon } from '@rneui/themed';
import {  View, StyleSheet, Image ,Linking} from 'react-native';


export default function MyInfo(props){
return(
 <Text style={{color:'black', marginBottom:10}}> <Text style={{backgroundColor:''}}> {props.title}</Text> :   {props.value}</Text>
);
}

const styles = StyleSheet.create({

});