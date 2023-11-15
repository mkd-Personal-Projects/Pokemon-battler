import { appRouter } from "../../../trpc-server/routers/_app";

describe("appRouter", () => {
  describe("getAllPokemon", () => {
    test("returns a list of pokemon", async () => {
      const caller = appRouter.createCaller({});
      const pokemon = await caller.getAllPokemon();

      expect(pokemon.length).toBeGreaterThan(1);

      pokemon.forEach((pokemon) => {
        expect(pokemon).toEqual({
          pokemonId: expect.any(Number),
          type: expect.any(Array),
          pokemonName: expect.any(String),
          attack: expect.any(Number),
          defense: expect.any(Number),
          health: expect.any(Number),
          splAttack: expect.any(Number),
          splDefense: expect.any(Number),
          speed: expect.any(Number),
          level: expect.any(Number),
        });
      });
    });

    test("returns a list of pokemon sorted by pokemonId in ascending order by default", async () => {
      const caller = appRouter.createCaller({});
      const pokemon = await caller.getAllPokemon();

      expect(pokemon.length).toBeGreaterThan(1);
      let prevId: number = pokemon[0].pokemonId;

      for (let i = 1; i < pokemon.length; i++) {
        const currentId: number = pokemon[i].pokemonId;

        expect(currentId - 1).toBe(prevId);

        prevId = currentId;
      }
    });

    test("returns a list of pokemon sorted by speed in descending order when given speed and desc as inputs", async () => {
      const caller = appRouter.createCaller({});
      const pokemon = await caller.getAllPokemon({
        sortBy: "speed",
        orderBy: "desc",
      });

      expect(pokemon.length).toBeGreaterThan(1);
      let prevSpeed: number = pokemon[0].speed;

      for (let i = 1; i < pokemon.length; i++) {
        const currentSpeed: number = pokemon[i].speed;

        expect(currentSpeed <= prevSpeed).toBe(true);

        prevSpeed = currentSpeed;
      }
    });
  });
  describe("getPokemonById", () => {
    test("returns the specified pokemon by its id", async () => {
      const caller = appRouter.createCaller({});
      const pokemon = await caller.getPokemonById({ pokemonId: 809 });

      expect(pokemon).toEqual(
        expect.objectContaining({
          pokemonId: 809,
          pokemonName: "Melmetal",
          type: expect.any(Array),
          attack: expect.any(Number),
          defense: expect.any(Number),
          health: expect.any(Number),
          splAttack: expect.any(Number),
          splDefense: expect.any(Number),
          speed: expect.any(Number),
          level: expect.any(Number),
        })
      );
    });
  });
  describe("getAllMoves", () => {
    test("returns a list of moves", async () => {
      const caller = appRouter.createCaller({});
      const moves = await caller.getAllMoves();

      expect(moves.length).toBeGreaterThan(1);

      moves.forEach((move) => {
        expect(move).toEqual(
          expect.objectContaining({
            moveName: expect.any(String),
            accuracy: expect.any(Number),
            category: expect.any(String),
            power: expect.any(Number),
            pp: expect.any(Number),
          })
        );
      });
    });
  });
  describe("getAllTypes", () => {
    test("returns a list of types", async () => {
      const caller = appRouter.createCaller({});
      const types = await caller.getAllTypes();

      expect(types.length).toBeGreaterThan(1);

      types.forEach((type) => {
        expect(type).toEqual(
          expect.objectContaining({
            type: expect.any(String),
            doesNotEffect: expect.any(Array),
            strongAgainst: expect.any(Array),
            weakAgainst: expect.any(Array),
          })
        );
      });
    });
  });
  describe("getAllTrainers", () => {
    test("returns a list of trainers", async () => {
      const caller = appRouter.createCaller({});
      const trainers = await caller.getAllTrainers();

      expect(trainers.length).toBeGreaterThan(1);

      trainers.forEach((trainer) => {
        expect(trainer).toEqual(
          expect.objectContaining({
            trainerId: expect.any(String),
            name: expect.any(String),
          })
        );
      });
    });
  });
  describe("getTrainersPokemon", () => {
    test("returns the all the pokemon and their moves for the given trainer", async () => {
      const caller = appRouter.createCaller({});
      const team = await caller.getTrainersPokemon({
        trainerName: "Cynthia",
      });

      expect(team.length).toBeGreaterThan(1);

      team.forEach(({ pokemon, moves }) => {
        expect(pokemon).toEqual(
          expect.objectContaining({
            pokemonId: expect.any(Number),
            type: expect.any(Array),
            pokemonName: expect.any(String),
            attack: expect.any(Number),
            defense: expect.any(Number),
            health: expect.any(Number),
            splAttack: expect.any(Number),
            splDefense: expect.any(Number),
            speed: expect.any(Number),
            level: expect.any(Number),
          })
        );

        expect(moves.length).toBeGreaterThan(1);

        moves.forEach((move) => {
          expect(move).toEqual(
            expect.objectContaining({
              moveName: expect.any(String),
              accuracy: expect.any(Number),
              category: expect.any(String),
              power: expect.any(Number),
              pp: expect.any(Number),
            })
          );
        });
      });
    });
  });
});
