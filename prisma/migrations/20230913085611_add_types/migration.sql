-- CreateTable
CREATE TABLE "Types" (
    "type" TEXT NOT NULL,
    "strongAgainst" TEXT[],
    "weakAgainst" TEXT[],
    "doesNotEffect" TEXT[],

    CONSTRAINT "Types_pkey" PRIMARY KEY ("type")
);

-- CreateTable
CREATE TABLE "PokemonTypes" (
    "pokemonTypeId" TEXT NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "PokemonTypes_pkey" PRIMARY KEY ("pokemonTypeId")
);

-- AddForeignKey
ALTER TABLE "PokemonTypes" ADD CONSTRAINT "PokemonTypes_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("pokemonId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokemonTypes" ADD CONSTRAINT "PokemonTypes_type_fkey" FOREIGN KEY ("type") REFERENCES "Types"("type") ON DELETE RESTRICT ON UPDATE CASCADE;
