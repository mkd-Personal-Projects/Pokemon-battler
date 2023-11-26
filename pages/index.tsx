import { useGetTeam } from "../hooks/useGetTeam";
import Link from "next/link";

// single page layout
// battle screen from pokemon games

// allow user to choose their fav pokemon
// dialog with questions to determine with some level of randomness the team of pokemon the user will have
// this can include random moves, atleast two stab moves and two other random moves
// logic to find random types of pokemon/moves?
// text will appear one char at a time
// > arrow to maybe skip dialog/fast forward it?

// allow user to select the starting pokemon, the rest can be switched in in any order
// allow user to select to fight (selecting a move) or switch pokemon
// run option, confirmation popup which will leat to an automatic loss and a message from cynthia
// display front image of pokemon for the initial showing, then switch to back for users team and front for opponents team
// some form of animation for combat, could be very simple for now
// animation for switching pokemon with text

// single fight with cynthia for now
// some kind of logic for cynthia to choose the best move with the most damage + option to switch if type matchup is not good, but this should be limited to maybe once every 4 turns?

// --- Nice to haves ---
// char sillouete for user and enemies i.e. cynthia?
// maybe some battle music?
// once your team has been chosen they are shown in a bog of 6 pokeballs which all shake then pop open to reveal the users team
// research pokemon battler for ideas

const IndexPage = () => {
  const { selectedPokemon, handleSelectedPokemon } = useGetTeam();

  return (
    <div id='home-container'>
      <h1 id='heading'>Welcome</h1>
    </div>
  );
};

export default IndexPage;
