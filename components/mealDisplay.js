import { StyleSheet, Text, View ,FlatList,SafeAreaView} from 'react-native';
import MealItem from './mealItem';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        //   backgroundColor: '#fff',
        flexDirection: "row",
        // justifyContent:'space-evenly'
        // flexWrap: "wrap",
      },
  });
  
export default function MealDisplay({displayedMeals,MealViewHandler}) {

    function renderMealItem(itemData) {
        return (
          <MealItem
            data={itemData.item}
            onPress={() => MealViewHandler(itemData.item)}
          />
        );
      }
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
          />
        </SafeAreaView>
      );
}