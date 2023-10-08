import { StyleSheet, Text, View ,ScrollView} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MenuItem from "../components/menuItem";
const styles = StyleSheet.create({
  container: {
      flex: 1,
    //   backgroundColor: '#fff',
    // marginTop: 50,
    padding: 10,
  },
  CategoryList: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap:'wrap'
  },
});

export default function Category({navigation}) {
    function pressHandler(categoryID){
    navigation.navigate("Meals Overview",{categoryID:categoryID});
    }
    // console.log(CATEGORIES);
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.CategoryList}>
        {CATEGORIES.map((val,index)=>{
          return (<MenuItem name={val.title} color={val.color} key={val.id} onPress={()=>pressHandler(val.id)}/>);
        })}
      </View>
      </ScrollView>
    </View>
  );
}
