import React from "react";

const Pokedex = (props) => {
  const {pokemons, loading} = props
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
      </div>
      <div>pagination</div>
    </div>
  );
};

export default Pokedex;
