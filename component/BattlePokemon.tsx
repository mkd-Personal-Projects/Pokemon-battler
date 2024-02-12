import React from "react";
import { BattlePokemonTypes } from "./ComponentTypes";

const BattlePokemon = ({
  position,
  pokemon,
  shouldDisplayTemp,
}: BattlePokemonTypes) => {
  const src = shouldDisplayTemp
    ? "/0.png"
    : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.pokemonId}.png`;

  const currentHealthPercentage = Math.round(
    ((pokemon.currentHealth || 0) / pokemon.health) * 100
  );

  return (
    <div id={`${position}-pokemon`}>
      <img src={src} alt='active-battle-pokemon' id='pokemon-image' />

      <div id={`${position}-pokemon-info`}>
        <div id='pokemon-name-level-container'>
          <p>{pokemon.pokemonName}</p>
          <p>:L{pokemon.level}</p>
        </div>

        <div id='pokemon-hp-container'>
          <p>HP:</p>
          <div id='pokemon-hp-bar-container'>
            <div
              style={{
                width: `${currentHealthPercentage}%`,
              }}
              id='pokemon-hp-bar-green'
            ></div>
            <div
              style={{
                width: `${currentHealthPercentage - 100}%`,
              }}
              id='pokemon-hp-bar-red'
            ></div>
          </div>
        </div>

        <div id='pokemon-hp-numbers'>
          <p>
            {pokemon.currentHealth ? pokemon.currentHealth : 0} /{" "}
            {pokemon.health}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BattlePokemon;
