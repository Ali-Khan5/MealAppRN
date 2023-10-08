import { useLayoutEffect } from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/mealItem";

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

export default function MealOverViewScreen({ route, navigation }) {
  const catid = route.params.categoryID;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catid) >= 0
  );

  useLayoutEffect(() => {
    const displayerCategory = CATEGORIES.find(
      (categoryItem) => categoryItem.id == catid
    );
    // console.log(displayerCategory);
    navigation.setOptions({
      title: displayerCategory.title,
    });
  }, [catid, navigation]);

  function MealItemHandler(mealdata) {
    navigation.navigate("Meals Screen", { mealData: mealdata });
  }

  function renderMealItem(itemData) {
    return (
      <MealItem
        data={itemData.item}
        onPress={() => MealItemHandler(itemData.item)}
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
