import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  Button,
} from "react-native";
import { useLayoutEffect } from "react";
import Steps from "../components/steps";
import IconButton from "../components/iconbutton";
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
  function headerButtonHandler(){
    console.log('pressed');
  }
  useLayoutEffect(() => {
    // console.log(displayerCategory);
    navigation.setOptions({
      title: data.title,
      headerRight: () => {
        return <IconButton onPress={headerButtonHandler} icon="star" color="white"/>;
      },
    });
  }, [data, navigation]);
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
