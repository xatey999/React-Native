import {View, Text, Image, ImageBackground, ScrollView, Button, Pressable} from 'react-native';
const logoImg = require('./assets/bgimg.png');
const appLogo = require('./assets/futsal.png');

export default function App() {
  return (
    <View style={{flex:1, backgroundColor:'grey'}}>
      <Button title="Press" onPress={() => console.log('Button Pressed!!')} color={'midnightblue'}
      />
      <Pressable onPress={() => console.log("Image pressed!!!")}>
      <Image source={appLogo} style={{width:200, height:300}} />
      </Pressable>
      <Pressable onPress={() => console.log('Text Pressed!!')}>
      <Text style={{color:'blue', fontWeight:800}}>My name is Ujjwal Adhikari.</Text>
      </Pressable>
    </View>
  );
}
