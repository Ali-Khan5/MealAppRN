import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Category from './screens/catagory';
import {  NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MealOverViewScreen from './screens/mealsOverViewScreen';

const Stack=createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Meals Category" component={Category}/>
      <Stack.Screen name="Meals Overview" component={MealOverViewScreen}/>
    </Stack.Navigator>
      {/* <Category/> */}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
