import PokemonCard from "../component/PokemonCard";
import { useGetPokemon } from "../hooks/trpc/useGetPokemon";
import { useGetTeam } from "../hooks/useGetTeam";
import Link from "next/link";

const Pokemon = () => {
  const { pokemon } = useGetPokemon();
  const { selectedPokemon, handleSelectedPokemon } = useGetTeam();

  return (
    <div id='home-container'>
      <h1 id='heading'>
        Select Your Team of Pokemon {selectedPokemon.length}/6
      </h1>
      <div id='pokemon-container'>
        {!pokemon ? (
          <p>Loading...</p>
        ) : (
          pokemon.map((mon) => {
            const isSelected = selectedPokemon.some(
              (pokemon) => pokemon.pokemonId === mon.pokemonId
            );

            return (
              <PokemonCard
                key={mon.pokemonId}
                pokemon={mon}
                handleSelectedPokemon={() => {
                  handleSelectedPokemon({ ...mon, moves: [] });
                }}
                isSelected={isSelected}
              />
            );
          })
        )}
      </div>

      {selectedPokemon.length === 6 ? (
        <div id='confirm-team-container'>
          <Link href='/team' id='confirm-team-button'>
            Confirm
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Pokemon;
