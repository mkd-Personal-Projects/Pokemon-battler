import React from "react";
import { BattlePokemonTypes } from "./ComponentTypes";

const BattlePokemon = ({ src, position }: BattlePokemonTypes) => {
  return (
    <div id={`${position}-pokemon`}>
      <img src={src} alt={"test"} id='pokemon-image' />
    </div>
  );
};

export default BattlePokemon;
