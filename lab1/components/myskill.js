import React from "react";

import { Text, Card } from '@rneui/themed';
import { Icon } from '@rneui/themed';
import {  View, StyleSheet, Image ,Linking} from 'react-native';

import { LinearProgress } from '@rneui/themed';
export default function MySkill(props){
return(
<View>
<Text style={{color:'black'}}>{props.name} :         {props.percentage}%</Text>
<LinearProgress animation={false} color='black' value={props.percentage/100}></LinearProgress>
</View>
);
}
const styles = StyleSheet.create({

});