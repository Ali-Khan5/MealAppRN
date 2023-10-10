import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  Button,
} from "react-native";
import { useContext, useLayoutEffect } from "react";
import Steps from "../components/steps";
import IconButton from "../components/iconbutton";
import {FavoritesContext} from "../store/context/favourites-context";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   backgroundColor: '#fff',
    padding: 20,
  },
  heroSection: {
    // flex: 1,
    flexDirection: "row",
    // fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: "black",
    // borderStyle: "solid",
    // height: 100,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    width: "100%",
    height: 180,
  },
  imgStyle: {
    overflow: "hidden",
    borderRadius: 8,
    height: "100%",
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
    fontSize: 22,
    // borderBottomColor: "white",
    // borderBottomWidth: 2,
    // borderStyle: "solid",
  },
});

export default function MealScreen({ route, navigation }) {
  const data = route.params.mealData;
  const favoriteMealCtx=useContext(FavoritesContext);
  const mealIsFavorite=favoriteMealCtx.ids.includes(data.id);
  function headerButtonHandler(){
    console.log('pressed');
    if(mealIsFavorite){
      favoriteMealCtx.removeFavorites(data.id);
    }
    else{
      favoriteMealCtx.addFavorites(data.id);
    }
  }

  useLayoutEffect(() => {
    // console.log(displayerCategory);
    navigation.setOptions({
      title: data.title,
      headerRight: () => {
        return <IconButton onPress={headerButtonHandler} 
        icon={mealIsFavorite ?'star':'star-outline' 
      }color="white"/>;
      },
    });
  }, [data, navigation,mealIsFavorite]);
  console.log('render?')
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.heroSection}>
          <Image style={styles.imgStyle} source={{ uri: data.imageUrl }} />
        </View>
        <Text style={styles.title}>{data.title}</Text>

        <Steps title={"Ingredients"} steps={data.ingredients} list={false} />

        <Steps title={"Steps to Make"} steps={data.steps} list={true} />
      </ScrollView>
    </View>
  );
}
