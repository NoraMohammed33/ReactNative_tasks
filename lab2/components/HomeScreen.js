import { Button, View, Image,Text ,StyleSheet} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center'}} >
          <Image source={require('../assets/noor.jpg')} style={styles.photo} />
          <Text style={{color:'green',fontSize:25}}> Welcome to Noor Website</Text>
          <Text style={{margin:5}}>
          Full Stack Developer ITI graduate working with React js ,Angular,Vue Laravel NodeJs with  agile methodlogy
            working with React js ,Angular,Vue Laravel NodeJs with  agile methodlogy 
          </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  photo:{
        width: '100%',
        height:'30%'
  }
  })