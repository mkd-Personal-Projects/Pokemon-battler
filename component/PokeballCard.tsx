import { PokemonWithMovesTypes } from "../db/data/tsPokemonTypes";

type Props = {
  children: JSX.Element;
  isActive: boolean;
  pokemon: PokemonWithMovesTypes;
  canSwitchIn: boolean;
  handleClick: (pokemonId: number) => void;
  isDisabled: boolean;
};

const PokeballCard = ({
  children,
  isActive,
  pokemon,
  canSwitchIn,
  handleClick,
  isDisabled,
}: Props) => {
  return (
    <div className='pokeball-card-container'>
      {children}
      <div className={isActive ? "pokeball-popop-container" : "display-none"}>
        <div className='pokeball-popop-container-inner-trim'>
          <div className='pokeball-pokemon-info'>
            <p>{pokemon.pokemonName.toUpperCase()}</p>
            <p>{pokemon.type.join(" - ")}</p>
          </div>
          <div className='pokeball-moves-info'>
            {pokemon.moves.map((move) => {
              return (
                <div key={move.moveName} className='pokeball-move-container'>
                  <p>{move.moveName}</p>
                  {/* <p>{move.type}</p> */}
                </div>
              );
            })}
          </div>
        </div>
        {canSwitchIn && (
          <button
            className='switch-in-button'
            onClick={() => handleClick(pokemon.pokemonId)}
            disabled={isDisabled}
          >
            Switch In
          </button>
        )}
      </div>
    </div>
  );
};

export default PokeballCard;
