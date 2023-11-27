const PokemonPokeballIcon = ({ pokemonId }: { pokemonId: number }) => {
  return (
    <div className='pokemon-icon-pokeball'>
      <img className='pokeball' src='pokeball-left.jpeg'></img>
      <img
        className='icon-over-pokeball'
        // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
        src={`/0.png`}
      />
    </div>
  );
};

export default PokemonPokeballIcon;
