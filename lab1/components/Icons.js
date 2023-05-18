import React from "react";
import { Text, Card } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MyIcon(props){

  return(
    <Icon name={props.name}style={{color:'yellow'}}></Icon>
  )
}

