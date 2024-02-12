import { PokemonCardType } from "./ComponentTypes";
import PokemonPokeballIcon from "./PokemonPokeballIcon";

const SelectPokemon = ({
  pokemon,
  handleSelectedPokemon,
  isSelected,
  shouldDisplayTemp,
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
        src={
          shouldDisplayTemp
            ? `/0.png`
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemonId}.png`
        }
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
