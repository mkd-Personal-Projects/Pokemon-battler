/*
  Warnings:

  - You are about to drop the column `moveInfo` on the `PokemonMoves` table. All the data in the column will be lost.
  - Added the required column `move` to the `PokemonMoves` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PokemonMoves" DROP CONSTRAINT "PokemonMoves_moveInfo_fkey";

-- AlterTable
ALTER TABLE "PokemonMoves" DROP COLUMN "moveInfo",
ADD COLUMN     "move" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Trainer" (
    "trainerId" TEXT NOT NULL,
    "trainerName" TEXT NOT NULL,

    CONSTRAINT "Trainer_pkey" PRIMARY KEY ("trainerId")
);

-- CreateTable
CREATE TABLE "Belt" (
    "BeltId" TEXT NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    "trainerId" TEXT NOT NULL,

    CONSTRAINT "Belt_pkey" PRIMARY KEY ("BeltId")
);

-- AddForeignKey
ALTER TABLE "PokemonMoves" ADD CONSTRAINT "PokemonMoves_move_fkey" FOREIGN KEY ("move") REFERENCES "Moves"("moveName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Belt" ADD CONSTRAINT "Belt_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("pokemonId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Belt" ADD CONSTRAINT "Belt_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "Trainer"("trainerId") ON DELETE RESTRICT ON UPDATE CASCADE;
