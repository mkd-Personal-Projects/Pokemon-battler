import { PokemonPokeballIconType } from "./ComponentTypes";

const PokemonPokeballIcon = ({
  pokemonId,
  shouldDisplayTemp,
  status,
  handleClick,
}: PokemonPokeballIconType) => {
  return (
    <button
      className='pokeball-container'
      onClick={() => handleClick(pokemonId)}
    >
      <div className={"pokeball-status" + " " + "-" + status}></div>
      <img className='pokeball' src='pokeball-left.png'></img>
      <img
        className='icon-over-pokeball'
        src={
          shouldDisplayTemp
            ? `/0.png`
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
        }
      />
    </button>
  );
};

export default PokemonPokeballIcon;
