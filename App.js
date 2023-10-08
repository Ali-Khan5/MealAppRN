import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Category from "./screens/catagory";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealOverViewScreen from "./screens/mealsOverViewScreen";
import MealScreen from "./screens/mealScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNaviRgator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#754005" },
        headerTintColor: "white",
        gestureDirection: "horizontal",
        //sceneContainer Style for drawer only
        sceneContainerStyle: {
          backgroundColor: "#282626",
        },
        drawerContentStyle: {
          backgroundColor: "#512d05",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "yellow",
        drawerActiveBackgroundColor: "#382005",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={Category}
        options={{
          title: "All Category",
          drawerIcon: (color, size) => <Ionicons name="list" color={'white'} size={22} />,
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoriteScreen}
      options={{
       
        drawerIcon: (color, size) => <Ionicons name="star" color={'white'} size={20} />,
      }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#754005" },
            headerTintColor: "white",
            gestureDirection: "horizontal",
            cardStyle: {
              backgroundColor: "#282626",
            },
          }}
        >
          <Stack.Screen
            name="Meals Category"
            component={DrawerNaviRgator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Meals Overview"
            component={MealOverViewScreen}
            // options={(route,navigation)=>{
            //   const catID=route.params.categoryID;
            //     return {title:catID};
            // }}
          />
          <Stack.Screen
            name="Meals Screen"
            component={MealScreen}
            options={{
              title: "Meals Screen",
              headerRight: () => {
                return <Text> In the Header </Text>;
              },
            }}
          />
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
