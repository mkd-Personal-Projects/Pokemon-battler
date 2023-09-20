/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Snack` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Snack" DROP CONSTRAINT "Snack_categoryId_fkey";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Snack";

-- CreateTable
CREATE TABLE "Pokemon" (
    "pokemonId" INTEGER NOT NULL,
    "pokemonName" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "health" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "attack" INTEGER NOT NULL,
    "defence" INTEGER NOT NULL,
    "splDefence" INTEGER NOT NULL,
    "splAttack" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("pokemonId")
);

-- CreateTable
CREATE TABLE "Moves" (
    "moveId" TEXT NOT NULL,
    "moveName" TEXT NOT NULL,
    "power" INTEGER NOT NULL,
    "accuracy" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Moves_pkey" PRIMARY KEY ("moveId")
);

-- CreateTable
CREATE TABLE "PokemonMoves" (
    "pokemonMoveId" TEXT NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    "moveId" TEXT NOT NULL,

    CONSTRAINT "PokemonMoves_pkey" PRIMARY KEY ("pokemonMoveId")
);

-- AddForeignKey
ALTER TABLE "PokemonMoves" ADD CONSTRAINT "PokemonMoves_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("pokemonId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokemonMoves" ADD CONSTRAINT "PokemonMoves_moveId_fkey" FOREIGN KEY ("moveId") REFERENCES "Moves"("moveId") ON DELETE RESTRICT ON UPDATE CASCADE;
