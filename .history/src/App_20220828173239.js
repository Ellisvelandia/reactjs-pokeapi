import React, {useEffect, useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { searchPokemon } from "./api";
import Pokedex from "./components/Pokedex";

function App() {
use


  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    console.log("pokemon", result);
  };
  return (
    <div>
      <Navbar />
      <Searchbar onSearch={onSearchHandler} />
      <Pokedex/>
      <div className="App"></div>
    </div>
  );
}

export default App;
