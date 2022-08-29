import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Pokemon = (props) => {
  const {FavoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name)
  }
  const heart = FavoritePokemons.includes(pokemon.name) ? 
  return <div>{pokemon.name}</div>;
};

export default Pokemon;
