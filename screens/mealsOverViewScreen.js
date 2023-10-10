import { useLayoutEffect } from "react";
import { StyleSheet, View, FlatList,  } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/mealItem";
import MealDisplay from "../components/mealDisplay";

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

  
  return (
    <MealDisplay MealViewHandler={MealItemHandler} displayedMeals={displayedMeals}/>
  );
}
