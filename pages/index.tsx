import { useEffect, useState } from "react";
import PlayerBox from "../component/PlayerBox";
import PlayerPopup from "../component/PlayerPopup";
import BattlePokemon from "../component/BattlePokemon";
import { useGetPokemonByName } from "../hooks/trpc/useGetPokemonByName";
import { useGetTeam } from "../hooks/useGetTeam";
import SelectPokemon from "../component/SelectPokemon";
import PokemonPokeballIcon from "../component/PokemonPokeballIcon";
import useDebounced from "../hooks/useDebounce";
import { useGetTypes } from "../hooks/trpc/useGetTypes";
import { useGetPokemonByType } from "../hooks/trpc/useGetPokemonByType";
import {
  MoveTypesFormatted,
  PokemonWithMovesTypes,
  TypeInfo,
} from "../db/data/tsPokemonTypes";
import PokeballCard from "../component/PokeballCard";
import { useGetTrainersPokemon } from "../hooks/trpc/useGetTrainersPokemon";
import { useGetRandomPokemon } from "../hooks/trpc/useGetRandomPokemon";

const shouldDisplayTemp = true;

const IndexPage = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [isTeamSetup, setIsTeamSetup] = useState<boolean>(false);
  const [selectedPokeball, setSelectedPokeball] = useState<number | null>(null);
  const [selectedMove, setSelectedMove] = useState<MoveTypesFormatted | null>(
    null
  );
  const [hasBattleStarted, setHasBattleStarted] = useState<boolean>(false);
  const [haveWinner, setHaveWinner] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [pokemonName, setPokemonName] = useState<string>("");
  const searchTerm = useDebounced(pokemonName);
  const { searchedPokemon, isLoading } = useGetPokemonByName(searchTerm);
  const { pokemonTeam, setPokemonTeam, handleAddToPokemonTeam } = useGetTeam();
  const [selectedType, setSelectedType] = useState("");
  const { types, rawTypes } = useGetTypes();
  useGetPokemonByType(selectedType, handleAddToPokemonTeam, pokemonTeam);
  const [shouldGetRandomPokemon, setShouldGetRandomPokemon] =
    useState<boolean>(false);
  useGetRandomPokemon(
    shouldGetRandomPokemon,
    handleAddToPokemonTeam,
    pokemonTeam,
    setShouldGetRandomPokemon
  );
  const [confirmSelected, setConfirmSelected] = useState<string>("");
  const [mainText, setMainText] = useState<string>(
    "What is your favourite Pokemon?"
  );
  const { opponentTeam, setOpponentTeam } = useGetTrainersPokemon();

  useEffect(() => {
    if (pokemonTeam.length !== 0 && !isTeamSetup) {
      const nextSetOfOptions = types[pokemonTeam.length - 1];

      if (nextSetOfOptions) {
        const formattedOptions = nextSetOfOptions.map(({ type }) => type);
        setOptions(formattedOptions);
      } else {
        setMainText(
          `Select a pokemon to start battling with. 
          You can also select a different pokemon mid battle to switch to them as well.`
        );
        setOptions([]);
        setIsTeamSetup(true);
      }
    }
  }, [pokemonTeam]);

  const hasTeamFainted = (pokemon: PokemonWithMovesTypes[]) => {
    return pokemon.every((mon) => mon.status === "fainted");
  };

  const getActivePokemon = (pokemon: PokemonWithMovesTypes[]) => {
    return pokemon.filter((mon) => mon.status === "active")[0];
  };

  const handleTypeClick = (selectedOption: string) => {
    setSelectedType(selectedOption);
  };

  const handleBattleClick = (selectedOption: string) => {
    const activePokemon = getActivePokemon(pokemonTeam);
    const selectedMove = activePokemon.moves.filter(
      ({ moveName }) => moveName === selectedOption
    )[0];

    setSelectedMove(selectedMove);

    setMainText(
      `Name / ${selectedMove.moveName}
      Power / ${selectedMove.power}
      Type / ${selectedMove.type}`
    );
  };

  const updateDamageMessage = (
    pokemon: PokemonWithMovesTypes,
    moveName: string,
    damage: number,
    didCrit: boolean,
    damageMultiplier: number
  ) => {
    let message = `${pokemon.pokemonName} Used ${moveName}...`;

    if (damage === 0) {
      message += "\nIt had No Effect";
    } else if (didCrit) {
      message += "\nIt was a CRIT";
    } else if (damageMultiplier < 1) {
      message += "\nIt was Not Very Effective";
    } else if (damageMultiplier > 1) {
      message += "\nIt was Very Effective";
    } else {
      message += "\nIt was Effective";
    }

    return message;
  };

  const updatePokemonHealth = (
    team: PokemonWithMovesTypes[],
    pokemonToUpdate: PokemonWithMovesTypes,
    updatedHealth: number
  ) => {
    return team.map((mon) => {
      if (mon.pokemonId === pokemonToUpdate.pokemonId) {
        return {
          ...pokemonToUpdate,
          currentHealth: updatedHealth,
        };
      } else {
        return mon;
      }
    });
  };

  const chooseNextOpponentPokemon = (team: PokemonWithMovesTypes[]) => {
    let chosenActive = false;
    return team
      .sort(() => {
        return Math.random() - Math.random();
      })
      .map((mon) => {
        if (mon.status !== "fainted" && chosenActive === false) {
          chosenActive = true;
          return { ...mon, status: "active" };
        } else {
          return mon;
        }
      });
  };

  const delayTimer = (delay: number = 1000) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("done");
      }, delay);
    });
  };

  const updatePokemonFaitedStatus = (
    team: PokemonWithMovesTypes[],
    pokemonToUpdate: PokemonWithMovesTypes
  ) => {
    return team.map((mon) => {
      if (mon.pokemonId === pokemonToUpdate.pokemonId) {
        return {
          ...pokemonToUpdate,
          status: "fainted",
        };
      } else {
        return mon;
      }
    });
  };

  const handlePlayerAttackDamage = () => {
    const opponentsActivePokemon = getActivePokemon(opponentTeam);
    const playerActivePokemon = getActivePokemon(pokemonTeam);

    setIsDisabled(true);

    if (rawTypes && selectedMove) {
      const selectedMoveType = rawTypes.filter(
        ({ type }) => selectedMove.type === type
      )[0];

      const { damage, didCrit, damageMultiplier } = damageCalculator(
        opponentsActivePokemon,
        playerActivePokemon,
        selectedMoveType,
        selectedMove
      );

      const message = updateDamageMessage(
        playerActivePokemon,
        selectedMove.moveName,
        damage,
        didCrit,
        damageMultiplier
      );

      setMainText(message);

      let updatedOppoenetsHealth =
        (opponentsActivePokemon.currentHealth || 0) - damage;

      if (updatedOppoenetsHealth < 0) {
        updatedOppoenetsHealth = 0;
      }

      delayTimer(500).then(() => {
        setOpponentTeam((currTeam) => {
          return updatePokemonHealth(
            currTeam,
            opponentsActivePokemon,
            updatedOppoenetsHealth
          );
        });
      });

      if (updatedOppoenetsHealth > 0) {
        delayTimer(2500).then(() => {
          handleOpponentAttackDamage(
            opponentsActivePokemon,
            playerActivePokemon
          );
        });
      } else {
        delayTimer(2000)
          .then(() => {
            setMainText(`${opponentsActivePokemon.pokemonName} has Fainted!`);

            return delayTimer(3000);
          })
          .then(() => {
            setOpponentTeam((currTeam) => {
              const updatedTeam = chooseNextOpponentPokemon(
                updatePokemonFaitedStatus(currTeam, opponentsActivePokemon)
              );

              const newActivePokemon = getActivePokemon(updatedTeam);

              if (newActivePokemon) {
                setMainText(
                  `Cynthia has sent out ${newActivePokemon.pokemonName}`
                );
              } else {
                setHaveWinner(true);
                setOptions([]);
                setMainText("Cynthia has been defeated!");
              }

              setIsDisabled(false);

              return updatedTeam;
            });
          });
      }
    }
  };

  const handleOpponentAttackDamage = (
    pokemon: PokemonWithMovesTypes,
    PlayerActivePokemon: PokemonWithMovesTypes
  ) => {
    if (rawTypes) {
      const highestDamValues = {
        damage: 0,
        didCrit: false,
        damageMultiplier: 1,
        moveName: "",
      };

      pokemon.moves.forEach((move) => {
        const moveType = rawTypes.filter(({ type }) => move.type === type)[0];

        const { damage, didCrit, damageMultiplier } = damageCalculator(
          PlayerActivePokemon,
          pokemon,
          moveType,
          move
        );

        if (damage > highestDamValues.damage) {
          highestDamValues.damage = damage;
          highestDamValues.didCrit = didCrit;
          highestDamValues.damageMultiplier = damageMultiplier;
          highestDamValues.moveName = move.moveName;
        }
      });

      const message = updateDamageMessage(
        pokemon,
        highestDamValues.moveName,
        highestDamValues.damage,
        highestDamValues.didCrit,
        highestDamValues.damageMultiplier
      );

      setMainText(message);

      let updatedActivePokemonsHealth =
        (PlayerActivePokemon.currentHealth || 0) - highestDamValues.damage;

      if (updatedActivePokemonsHealth < 0) {
        updatedActivePokemonsHealth = 0;
      }

      delayTimer(500).then(() => {
        setPokemonTeam((currTeam) => {
          const updatedTeam = updatePokemonHealth(
            currTeam,
            PlayerActivePokemon,
            updatedActivePokemonsHealth
          );

          if (updatedActivePokemonsHealth <= 0) {
            updatedTeam.forEach((mon) => {
              if (mon.pokemonId === PlayerActivePokemon.pokemonId) {
                mon.status = "fainted";
              }
            });
            setOptions([]);

            if (hasTeamFainted(updatedTeam)) {
              delayTimer(2000).then(() => {
                setHaveWinner(true);
                setOptions([]);
                setMainText("You has been defeated!");
              });
            } else {
              delayTimer(2000)
                .then(() => {
                  setMainText(
                    `${PlayerActivePokemon.pokemonName} has Fainted!`
                  );

                  return delayTimer(2500);
                })
                .then(() => {
                  setMainText(
                    `Please select a differnt pokemon to switch to...`
                  );
                  setIsDisabled(false);
                });
            }
          } else {
            setIsDisabled(false);
          }

          return updatedTeam;
        });
      });
    }
  };

  const damageCalculator = (
    opposingPokemon: PokemonWithMovesTypes,
    attackingPokemon: PokemonWithMovesTypes,
    selectedMoveType: TypeInfo,
    selectedMove: MoveTypesFormatted
  ) => {
    let damageMultiplier = 1;

    const doesDamage =
      opposingPokemon.type
        .map((currType) => {
          return selectedMoveType.doesNotEffect.includes(currType);
        })
        .every((elem) => elem === false) || false;

    if (doesDamage) {
      const weakAgainstMultiplier =
        opposingPokemon.type.filter((currType) => {
          return selectedMoveType.weakAgainst.includes(currType);
        }).length * 2 || 1;

      damageMultiplier = damageMultiplier / weakAgainstMultiplier;

      const strongAgainstMultiplier =
        opposingPokemon.type.filter((currType) => {
          return selectedMoveType.strongAgainst.includes(currType);
        }).length * 2 || 1;

      damageMultiplier = damageMultiplier * strongAgainstMultiplier;
    } else {
      damageMultiplier = 0;
    }

    const attackingModifier =
      selectedMove.category === "Special"
        ? attackingPokemon.splAttack
        : attackingPokemon.attack;

    const defendingModifier =
      selectedMove.category === "Special"
        ? opposingPokemon.splDefense
        : opposingPokemon.defense;

    const random = (100 - Math.ceil(Math.random() * 15)) / 100; // random is 1 to 0.85

    const stab = attackingPokemon.type.includes(selectedMove.type) ? 1.5 : 1;

    const didCrit = Math.round(Math.random() * 10000) / 100 <= 6.25;

    const damage = Math.floor(
      ((22 * selectedMove.power * (attackingModifier / defendingModifier) + 2) /
        50) *
        random *
        (didCrit ? 1.5 : 1) *
        stab *
        damageMultiplier
    );

    // (((damage = 22 * power * (attack/spAttack / defence/spDefence)) + 2) / 50) *  random * stab * type

    return { damage, didCrit, damageMultiplier };
  };

  const handleSearchSelectedPokemon = (pokemon: PokemonWithMovesTypes) => {
    handleAddToPokemonTeam(pokemon);
    setMainText(
      "Select the type of the next pokemon you would like to add to your team."
    );
  };

  const handlePokeballClick = (pokemonId: number) => {
    setSelectedPokeball((currPokemball) => {
      if (currPokemball === pokemonId) {
        return null;
      } else {
        return pokemonId;
      }
    });
  };

  const handleSwitchIn = (pokemonId: number) => {
    setSelectedPokeball(null);
    setIsDisabled(true);
    setPokemonTeam((currTeam) => {
      const updatedTeam = currTeam.map((mon) => {
        if (mon.pokemonId === pokemonId) {
          return { ...mon, status: "active" };
        } else {
          return { ...mon, status: mon.status === "active" ? "" : mon.status };
        }
      });

      const opponentsActivePokemon = getActivePokemon(opponentTeam);
      const playerActivePokemon = getActivePokemon(updatedTeam);
      const previousActivePokemon = getActivePokemon(currTeam);

      if (!hasBattleStarted) {
        setMainText("Select a move to learn more about it ->");
        setHasBattleStarted(true);
        setIsDisabled(false);
      } else if (!previousActivePokemon) {
        setMainText("Select a move to learn more about it ->");
        setIsDisabled(false);
      } else {
        setMainText(`${playerActivePokemon.pokemonName} has been switched in`);

        delayTimer(2500).then(() => {
          handleOpponentAttackDamage(
            opponentsActivePokemon,
            playerActivePokemon
          );
        });
      }

      setOptions(
        playerActivePokemon.moves.map((move) => {
          return move.moveName;
        })
      );

      return updatedTeam;
    });
  };

  const handleRandomPokemonSearch = () => {
    setShouldGetRandomPokemon(true);
  };

  return (
    <div id='home-container'>
      {hasBattleStarted && opponentTeam && !haveWinner && (
        <>
          <BattlePokemon
            position='opponent'
            shouldDisplayTemp={shouldDisplayTemp}
            pokemon={getActivePokemon(opponentTeam)}
          />
          {getActivePokemon(pokemonTeam) && (
            <BattlePokemon
              position='player'
              pokemon={getActivePokemon(pokemonTeam)}
              shouldDisplayTemp={shouldDisplayTemp}
            />
          )}
        </>
      )}

      {pokemonTeam.length === 0 && (
        <div id='search-display'>
          {searchedPokemon?.length || isLoading === false ? (
            searchedPokemon.map((mon) => {
              const isSelected = confirmSelected === mon.pokemonName;
              return (
                <div id='search-pokemon-card' key={mon.pokemonId}>
                  <SelectPokemon
                    pokemon={mon}
                    handleSelectedPokemon={() =>
                      setConfirmSelected(mon.pokemonName)
                    }
                    isSelected={isSelected}
                    shouldDisplayTemp={shouldDisplayTemp}
                  />
                  {isSelected && (
                    <button
                      id='confirm-search-selected'
                      onClick={() => handleSearchSelectedPokemon(mon)}
                    >
                      Confirm
                    </button>
                  )}
                </div>
              );
            })
          ) : (
            <p>No Pokemon Found!</p>
          )}
        </div>
      )}

      {pokemonTeam.length >= 1 && !haveWinner && (
        <div
          className={
            "pokeball-container" + (pokemonTeam.length === 6 ? " -battle" : "")
          }
        >
          {pokemonTeam.map((mon) => {
            return (
              <PokeballCard
                key={mon.pokemonId}
                isActive={selectedPokeball === mon.pokemonId}
                pokemon={mon}
                canSwitchIn={isTeamSetup && mon.status === ""}
                handleClick={handleSwitchIn}
                isDisabled={isDisabled}
              >
                <PokemonPokeballIcon
                  pokemonId={mon.pokemonId}
                  shouldDisplayTemp={shouldDisplayTemp}
                  status={mon.status}
                  handleClick={handlePokeballClick}
                />
              </PokeballCard>
            );
          })}
        </div>
      )}

      {haveWinner &&
        (hasTeamFainted(pokemonTeam) ? (
          <h1>Game Over!</h1>
        ) : (
          <h1>Congrats!</h1>
        ))}

      <PlayerBox>
        <div id='player-box-container'>
          <div>
            <p style={{ whiteSpace: "pre-line" }}>{mainText}</p>
            {mainText.includes("Power / ") ? (
              <button onClick={handlePlayerAttackDamage} id='attack-button'>
                Attack
              </button>
            ) : (
              <></>
            )}
            {pokemonTeam.length === 0 && (
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
        </div>
        <PlayerPopup
          isMoveSelect={false}
          options={options}
          isDisabled={isDisabled}
          handleClick={hasBattleStarted ? handleBattleClick : handleTypeClick}
          fontSize={hasBattleStarted ? "30px" : "40px"}
        />
      </PlayerBox>
    </div>
  );
};

export default IndexPage;

// --- SETUP ---

// Loading page with a spinner and messages of e.g. "Capturing pokemon" -- can be hard coded to stall for 5 - 10 seconds

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

// refetch getPokemonByType if the pokemon is already in the party e.g. if the initial searched pokemon happens to match the randomly selected pokemon by type

//
//

// --- Nice to haves ---

// Char sillouete for user and enemies i.e. cynthia?
// Maybe some battle music?
// Once your team has been chosen they are shown in a bog of 6 pokeballs which all shake then pop open to reveal the users team
// Research pokemon battler for ideas
