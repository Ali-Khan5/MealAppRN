import { StyleSheet, Text, View,FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/mealItem';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:20,
    //   backgroundColor: '#fff',
    flexDirection:'row',
    // justifyContent:'space-evenly'
    flexWrap:'wrap',
    },
  });
  
export default function MealOverViewScreen({route}) {

const catid=route.params.categoryID;
const displayedMeals=MEALS.filter((mealItem)=>mealItem.categoryIds.indexOf(catid)>=0);

function renderMealItem(itemData){
    return <MealItem data={itemData.item}/>;
}
  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals}
      keyExtractor={(item)=>item.id}
      renderItem={renderMealItem}
      />
    </View>
  );
}