import { StyleSheet, Text, View } from 'react-native';
import {useContext} from 'react';
import MealDisplay from '../components/mealDisplay';
import { useDispatch, useSelector } from "react-redux";
// import {FavoritesContext} from "../store/context/favourites-context";
import { MEALS } from '../data/dummy-data';

const styles = StyleSheet.create({
    container: {
       flex: 1,
    //   backgroundColor: '#fff',
      padding:30,
    },
    font:{
      fontSize:60,
      color:'white',
      fontWeight:'bold'
    }
  });
  
export default function FavoriteScreen({navigation}) {
  // const favoriteMealCtx=useContext(FavoritesContext);
  const favoriteIds=useSelector((state)=>state.favoriteMeals.ids);

  // const MealIDs = favoriteMealCtx.ids;

  const displayedMeals = MEALS.filter((mealItem) => favoriteIds.includes(mealItem.id));

  // useLayoutEffect(() => {
  //   const displayerCategory = CATEGORIES.find(
  //     (categoryItem) => categoryItem.id == catid
  //   );
  //   // console.log(displayerCategory);
  //   navigation.setOptions({
  //     title: displayerCategory.title,
  //   });
  // }, [catid, navigation]);

  function MealItemHandler(mealdata) {
    navigation.navigate("Meals Screen", { mealData: mealdata });
  }
  const NothingAdded=
    <View style={styles.container}>
      <Text style={styles.font}>
        Star Receipes for them to appear here...
      </Text>
    </View>;
  
  return (
      displayedMeals.length?
        <MealDisplay MealViewHandler={MealItemHandler} displayedMeals={displayedMeals}/>:
        NothingAdded
      
    
  );
}