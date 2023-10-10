import { useState, createContext } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

export  function FavoritesContextProvider({ children }) {
    const [favoriteMealId,setFavoriteMealId]=useState([]);

    function addFavorites(newValue){
        setFavoriteMealId((prevState)=>[...prevState,newValue]);
    }

    function removeFavorites(removeID){
        setFavoriteMealId((currentState)=>currentState.filter(id=>id!=removeID));

    }

    const value={
        ids:favoriteMealId,
        addFavorites:addFavorites,
        removeFavorites,removeFavorites
    }
    return(

        <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
    );
}
