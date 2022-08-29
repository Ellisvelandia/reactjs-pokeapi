import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { searchPokemon, getPokemons, getPokemonData } from "./api";
import Pokedex from "./components/Pokedex";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });

      const results = Promise.all(promises);
      setPokemons(result);
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
