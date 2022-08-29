import React, { useEffect, useState } from "react";
import { searchPokemon, getPokemons, getPokemonData } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { FavoriteProvider } from "./contexts/favoritesContext";

const favoritesKey = "f";

function App() {
  const [Page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 25;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
         setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error", error);
    }
  };

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey))  || []
    setFavorites (pokemons)
  }

  
  useEffect(() => {
    loadFavoritePokemons()
  }, []);
  
  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updateFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if (favoriteIndex >= 0) {
      updateFavorites.splice(favoritesKey, JSON.str)
    }
  }

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
