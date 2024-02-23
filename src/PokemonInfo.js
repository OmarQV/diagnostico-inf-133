// PokemonInfo.js
import React, { useState } from 'react';
import axios from 'axios';

function PokemonInfo() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonName, setPokemonName] = useState('');

  const getPokemonData = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      setPokemonData(response.data);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Enter Pokemon name"
      />
      <button onClick={getPokemonData}>Search</button>
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <h3>Abilities:</h3>
          <ul>
            {pokemonData.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
          {/* Add more information as needed */}
        </div>
      )}
    </div>
  );
}

export default PokemonInfo;
