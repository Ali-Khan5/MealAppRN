import { StyleSheet, Text, View ,Button,Pressable} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    marginRight:15
    },
    pressed:{
        opacity:0.5
    }
    
  });
  
export default function IconButton({icon,color,onPress}) {
  return (
 <Pressable onPress={onPress} style={({pressed})=> pressed? styles.pressed :styles.container}>
    <Ionicons name={icon} size={20} color={color} />
 </Pressable>
  );
}