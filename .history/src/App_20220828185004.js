import React, { useEffect, useState } from "react";
import { searchPokemon, getPokemons, getPokemonData } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { FavoriteProvider } from "./contexts/favoritesContext";

const favoritesKey = "f"

function App() {
  use
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons error", error);
    }
  };

  useEffect(() => {
    console.log("charizard");
    fetchPokemons();
  }, [pokemons]);

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    console.log("pokemon", result);
  };
  return (
    <div>
      <Navbar />
      <Searchbar onSearch={onSearchHandler} />
      <Pokedex pokemons={pokemons} loading={loading} />
      <div className="App"></div>
    </div>
  );
}

export default App;
