import { PokemonCardType } from "./ComponentTypes";
import PokemonPokeballIcon from "./PokemonPokeballIcon";

const SelectPokemon = ({
  pokemon,
  handleSelectedPokemon,
  isSelected,
}: PokemonCardType) => {
  return (
    <div
      onClick={() => handleSelectedPokemon()}
      className={
        "search-pokemon-container " +
        (isSelected ? " selected-search-pokemon" : "")
      }
    >
      <img
        // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemonId}.png`}
        src={`/0.png`}
        alt={pokemon.pokemonName}
        className='pokemon-image'
      />
      <p className='pokemon-id'>#{pokemon.pokemonId}</p>
      <p className='pokemon-name'>{pokemon.pokemonName}</p>
      <div className='type-container'>
        {pokemon.type.map((type) => {
          return (
            <p key={pokemon.pokemonId + type} className='type'>
              {type}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SelectPokemon;
