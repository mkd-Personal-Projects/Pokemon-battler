import client from "../client";

export const getCynthiasTeam = async () => [
  ...(await client.pokemon.findMany({ where: { pokemonName: "Spiritomb" } })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Roserade" } })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Togekiss" } })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Lucario" } })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Milotic" } })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Garchomp" } })),
];

export const getLancesTeam = async () => [
  ...(await client.pokemon.findMany({ where: { pokemonName: "Dragonite" } })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Kingdra" } })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Hydreigon" } })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Salamence" } })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Haxorus" } })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Flygon" } })),
];

export const getFlintsTeam = async () => [
  ...(await client.pokemon.findMany({ where: { pokemonName: "Rapidash" } })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Lopunny" } })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Steelix" } })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Drifblim" } })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Infernape" } })),
];

export const getLarrysTeam = async () => [
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Aerodactyl" },
  })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Altaria" } })),
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Hawlucha" },
  })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Oricorio" } })),
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Talonflame" },
  })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Gengar" } })),
];

export const getMalvasTeam = async () => [
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Pyroar" },
  })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Houndoom" } })),
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Torkoal" },
  })),
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Incineroar" },
  })),
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Infernape" },
  })),
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Darmanitan" },
  })),
];

export const getMarshalsTeam = async () => [
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Conkeldurr" },
  })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Gallade" } })),
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Hariyama" },
  })),
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Hitmonlee" },
  })),
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Vikavolt" },
  })),
];
export const getVolknersTeam = async () => [
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Electivire" },
  })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Luxray" } })),
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Raichu" },
  })),
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Rotom" },
  })),
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Jolteon" },
  })),
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Electrode" },
  })),
];

export const getCustomTeam = async () => [
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Tyranitar" },
  })),
  ...(await client.pokemon.findMany({ where: { pokemonName: "Infernape" } })),
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Celesteela" },
  })),
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Zeraora" },
  })),
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Azumarill" },
  })),
  ...(await client.pokemon.findMany({
    where: { pokemonName: "Latios" },
  })),
];
