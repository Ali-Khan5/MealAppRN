import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Platform,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, heigh: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 20,
    height: 250,
    // overflow: "hidden",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  heroSection: {
    flex: 1,
    flexDirection: "row",
    // fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: "black",
    // borderStyle: "solid",
    // height: 100,
    width: "100%",
    height: 120,
  },
  imgStyle: {
    height: "100%",
    width: "100%",
  },
  infoSection: {
    flexWrap: "wrap",
    flexDirection: "row",
    padding: 5,
    margin: 5,
    justifyContent: "space-around",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    borderStyle: "solid",
    marginTop: 10,
  },
  innerRadius:{
    flex:1,
    borderRadius:20,
    overflow:'hidden'
  },
  buttonPressed:{
    opacity:0.5
  },
  pressable:{
    flex:1
  },
});

export default function MealItem({ data }) {
  return (
    <View style={styles.container}>
      <Pressable 
        style={({pressed})=>[styles.pressable,pressed ?styles.buttonPressed: null]}
        // onPress={onPress}
      >
        <View style={styles.innerRadius}>
          <View style={[styles.heroSection]}>
            <Image style={styles.imgStyle} source={{ uri: data.imageUrl }} />
          </View>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.infoSection}>
            <Text>Duration: {data.duration} m</Text>
            <Text>Complexity: {data.complexity.toUpperCase()}</Text>
            <Text>Affordability: {data.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
