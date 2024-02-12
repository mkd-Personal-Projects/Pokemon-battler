import React, { useEffect, useState } from "react";
import { delayTimer } from "../utils/delayTimer";

type props = {
  mainText: string;
  handlePlayerAttackDamage: () => void;
  pokemonTeamLength: number;
  pokemonName: string;
  setPokemonName: (value: string) => void;
  handleRandomPokemonSearch: () => void;
};

const PlayerBoxText = ({
  mainText,
  handlePlayerAttackDamage,
  pokemonTeamLength,
  pokemonName,
  setPokemonName,
  handleRandomPokemonSearch,
}: props) => {
  const [textToDisplay, setTextToDisplay] = useState<string>("");

  useEffect(() => {
    // const shouldAnimate = mainText && !mainText.includes("Power /");
    // if (shouldAnimate) {
    //   const chars = mainText.split("");

    //   setTextToDisplay(chars[0]);

    //   for (let i = 1; i < chars.length; i++) {
    //     delayTimer(i * 50).then(() => {
    //       setTextToDisplay((currVal) => {
    //         return currVal + chars[i];
    //       });
    //     });
    //   }
    // } else {
    setTextToDisplay(mainText);
    // }
  }, [mainText]);

  return (
    <div>
      <p style={{ whiteSpace: "pre-line" }}>{textToDisplay}</p>
      {mainText.includes("Power / ") ? (
        <button onClick={handlePlayerAttackDamage} id='attack-button'>
          Attack
        </button>
      ) : (
        <></>
      )}
      {pokemonTeamLength === 0 && (
        <div>
          <input
            placeholder='Charizard'
            id='search-input'
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
          <button id='search-button' onClick={handleRandomPokemonSearch}>
            Random
          </button>
        </div>
      )}
    </div>
  );
};

export default PlayerBoxText;
