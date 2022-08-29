import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Pokemon = (props) => {
  const {FavoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name)
  }
  const heart = FavoritePokemons.includes(pokemon.name) ?  "❤️" : "🖤";
  
  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image"/>
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className=""></div>
        </div>
      </div>
    </div>
  )
};

export default Pokemon;
