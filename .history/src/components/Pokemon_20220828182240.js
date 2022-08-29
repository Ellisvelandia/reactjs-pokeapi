import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Pokemon = (props) => {
  const {FavoritePokemons, updateFavorite}
  const { pokemon } = props;
  console.log("pokemon", pokemon);
  return <div>{pokemon.name}</div>;
};

export default Pokemon;
