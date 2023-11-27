import { useEffect, useState } from "react";
import PlayerBox from "../component/PlayerBox";
import PlayerPopup from "../component/PlayerPopup";
import BattlePokemon from "../component/BattlePokemon";
import { useGetPokemonByName } from "../hooks/trpc/useGetPokemonByName";

const IndexPage = () => {
  const [options, setOptions] = useState<string[]>(["FIGHT", "POKEMON"]);
  const { pokemon, setPokemonName, refetch } = useGetPokemonByName();

  const opponentPokemonSprite =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png";

  const playerPokemonPrite =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png";

  const tempPokemonSprite = "/0.png";

  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);

  return (
    <div id='home-container'>
      <BattlePokemon
        src={true ? tempPokemonSprite : opponentPokemonSprite}
        position='opponent'
      />

      <BattlePokemon
        src={true ? tempPokemonSprite : playerPokemonPrite}
        position='player'
      />

      {/* <img className='pokeball' src='pokeball-left.jpeg'></img> */}

      <PlayerBox>
        <input onChange={(e) => setPokemonName(e.target.value)}></input>
        <PlayerPopup options={options} />
      </PlayerBox>
    </div>
  );
};

export default IndexPage;

// --- SETUP ---

// Allow user to choose their fav pokemon
// A search by name/dexNum
// Input with logic, if str query db for name, if num query for dexNum, with error message for not found then buttons below this for search and random
// < Math.floor((Math.random() * maxPokedexNum)) > to find a random pokemon by dexNum

// User will be able to choose from 4 random types 5 times
// which will query the database for a random pokemon belonging to that type
// 18 types, so an array of types (queried from the db) sorted randomly and then split into options of 4, 4, 4, 4, 2

// This can include random moves, atleast two stab moves and two other random moves
// Text will appear one char at a time

//
//

// --- SETUP BLOCKERS? ---
// logic to find random types of pokemon/moves? Is this do-able with a query?
//  await client.$queryRaw`SELECT * FROM moves ORDER BY random();`; ??

//
//

// --- BATTLE ---

// Allow user to select to fight (selecting a move) or switch pokemon
// Run option, confirmation popup which will lead to an automatic loss and a message from cynthia
// Display front image of pokemon for the initial showing, then switch to back for users team and front for opponents team
// Aanimation for combat, a simple jumping like animation for now
// Animation for pokemon appearing

// Single fight with cynthia for now
// Damage calcs with type effectiveness
// HP decrease with a % based div and at certain %'s can change from green to yellow to red.

//
//

// --- BATTLE BLOCKERS? ---

// Some kind of logic for cynthia to choose the best move with the most damage + option to switch if type matchup is not good, but this should be limited to maybe once every 4 turns?

//
//

// --- Nice to haves ---

// Char sillouete for user and enemies i.e. cynthia?
// Maybe some battle music?
// Once your team has been chosen they are shown in a bog of 6 pokeballs which all shake then pop open to reveal the users team
// Research pokemon battler for ideas
