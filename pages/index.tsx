import { observable } from "@trpc/server/observable";
import { useGetPokemon } from "../hooks/trpc/useGetPokemon";
import { useGetTeam } from "../hooks/trpc/useGetTeam";

const IndexPage = () => {
  const { pokemon } = useGetPokemon();
  const { selectedPokemon, addSelectedPokemon } = useGetTeam();

  console.log(selectedPokemon);

  return (
    <div id='home-container'>
      <h1 id='heading'>Select Your Team Of Pokemon {selectedPokemon.length}</h1>
      <div id='pokemon-container'>
        {!pokemon ? (
          <p>Loading...</p>
        ) : (
          pokemon.map((mon) => {
            return (
              <div
                onClick={() => addSelectedPokemon({ ...mon, moves: [] })}
                className='pokemon-card'
                key={mon.pokemonId}
              >
                <img
                  // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${mon.pokemonId}.png`}
                  src={`/0.png`}
                  alt={mon.pokemonName}
                  className='pokemon-image'
                />
                <p className='pokemon-id'>#{mon.pokemonId}</p>
                <p className='pokemon-name'>{mon.pokemonName}</p>
                <div className='type-container'>
                  {mon.type.map((type) => {
                    return (
                      <p key={mon.pokemonId + type} className='type'>
                        {type}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default IndexPage;
