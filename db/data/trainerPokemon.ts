import {
  MoveTypes,
  MoveTypesFormatted,
  PokemonWithTypes,
} from "../../db/data/tsPokemonTypes";
import { getPokemonsBySearchedName } from "../../models/data/pokemon.model";
import { getMovesByType } from "../../models/data/moves.model";
import { getFourRandomElems } from "../../utils/getFourRandomElems";

export const getCynthiasTeam = async () => [
  ...(await getPokemonsBySearchedName("Spiritomb")),
  ...(await getPokemonsBySearchedName("Roserade")),
  ...(await getPokemonsBySearchedName("Togekiss")),
  ...(await getPokemonsBySearchedName("Lucario")),
  ...(await getPokemonsBySearchedName("Milotic")),
  ...(await getPokemonsBySearchedName("Garchomp")),
];

export const getLancesTeam = async () => [
  ...(await getPokemonsBySearchedName("Dragonite")),
  ...(await getPokemonsBySearchedName("Kingdra")),
  ...(await getPokemonsBySearchedName("Hydreigon")),
  ...(await getPokemonsBySearchedName("Salamence")),
  ...(await getPokemonsBySearchedName("Haxorus")),
  ...(await getPokemonsBySearchedName("Flygon")),
];

export const getFlintsTeam = async () => [
  ...(await getPokemonsBySearchedName("Rapidash")),
  ...(await getPokemonsBySearchedName("Lopunny")),
  ...(await getPokemonsBySearchedName("Steelix")),
  ...(await getPokemonsBySearchedName("Drifblim")),
  ...(await getPokemonsBySearchedName("Infernape")),
];

export const getLarrysTeam = async () => [
  ...(await getPokemonsBySearchedName("Aerodactyl")),
  ...(await getPokemonsBySearchedName("Altaria")),
  ...(await getPokemonsBySearchedName("Hawlucha")),
  ...(await getPokemonsBySearchedName("Oricorio")),
  ...(await getPokemonsBySearchedName("Talonflame")),
  ...(await getPokemonsBySearchedName("Gengar")),
];

export const getMalvasTeam = async () => [
  ...(await getPokemonsBySearchedName("Pyroar")),
  ...(await getPokemonsBySearchedName("Houndoom")),
  ...(await getPokemonsBySearchedName("Torkoal")),
  ...(await getPokemonsBySearchedName("Incineroar")),
  ...(await getPokemonsBySearchedName("Infernape")),
  ...(await getPokemonsBySearchedName("Darmanitan")),
];

export const getMarshalsTeam = async () => [
  ...(await getPokemonsBySearchedName("Conkeldurr")),
  ...(await getPokemonsBySearchedName("Gallade")),
  ...(await getPokemonsBySearchedName("Hariyama")),
  ...(await getPokemonsBySearchedName("Hitmonlee")),
  ...(await getPokemonsBySearchedName("Vikavolt")),
];

export const getVolknersTeam = async () => [
  ...(await getPokemonsBySearchedName("Electivire")),
  ...(await getPokemonsBySearchedName("Luxray")),
  ...(await getPokemonsBySearchedName("Raichu")),
  ...(await getPokemonsBySearchedName("Rotom")),
  ...(await getPokemonsBySearchedName("Jolteon")),
  ...(await getPokemonsBySearchedName("Electrode")),
];

export const getCustomTeam = async () => [
  ...(await getPokemonsBySearchedName("Tyranitar")),
  ...(await getPokemonsBySearchedName("Infernape")),
  ...(await getPokemonsBySearchedName("Celesteela")),
  ...(await getPokemonsBySearchedName("Zeraora")),
  ...(await getPokemonsBySearchedName("Azumarill")),
  ...(await getPokemonsBySearchedName("Latios")),
];

export const getTrainersTeam = async (trainersName: string) => {
  let trainersTeam: PokemonWithTypes[] = [];

  if (trainersName === "Cynthia") {
    trainersTeam = await getCynthiasTeam();
  } else if (trainersName === "Lance") {
    trainersTeam = await getLancesTeam();
  } else if (trainersName === "Flint") {
    trainersTeam = await getFlintsTeam();
  } else if (trainersName === "Larry") {
    trainersTeam = await getLarrysTeam();
  } else if (trainersName === "Malva") {
    trainersTeam = await getMalvasTeam();
  } else if (trainersName === "Marshal") {
    trainersTeam = await getMarshalsTeam();
  } else if (trainersName === "Volkner") {
    trainersTeam = await getVolknersTeam();
  } else if (trainersName === "...") {
    trainersTeam = await getCustomTeam();
  }

  const formattedTeam = await Promise.all(
    trainersTeam.map(async (mon) => {
      const moves = getFourRandomElems(
        [
          ...(await Promise.all(
            mon.type.map(async (type) => {
              return await Promise.all([...(await getMovesByType(type))]);
            })
          )),
        ].flat()
      ) as MoveTypes[];

      const formattedMoves = moves.map((move) => {
        return { ...move.Moves, type: move.type };
      }) as MoveTypesFormatted[];

      return {
        ...mon,
        moves: formattedMoves,
      };
    })
  );

  return formattedTeam;
};
