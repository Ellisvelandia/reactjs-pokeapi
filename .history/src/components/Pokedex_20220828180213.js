import React from "react";

const Pokedex = (props) => {
  const {pokemons, loading} = props;
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
      </div>
      <div>pagination</div>
      {loading ? (
        <div>Carregando, segura fera...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons && pokemons.map((pokemon, index) => {
            return (
              <Pokemon key={index}  pokemon={pokemon}/>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
