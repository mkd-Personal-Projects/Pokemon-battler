import { PokemonCardType } from "./ComponentTypes";

const PokemonCard = ({
  pokemon,
  handleSelectedPokemon,
  isSelected,
}: PokemonCardType) => {
  return (
    <div
      onClick={() => handleSelectedPokemon()}
      className={"pokemon-card " + (isSelected ? " selected-pokemon-card" : "")}
    >
      <img
        // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemonId}.png`}
        // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.pokemonId}.png`}
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

export default PokemonCard;
