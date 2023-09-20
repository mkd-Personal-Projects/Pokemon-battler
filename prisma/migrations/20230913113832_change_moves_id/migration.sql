/*
  Warnings:

  - The primary key for the `Moves` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `moveId` on the `Moves` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `moveId` on the `PokemonMoves` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "PokemonMoves" DROP CONSTRAINT "PokemonMoves_moveId_fkey";

-- AlterTable
ALTER TABLE "Moves" DROP CONSTRAINT "Moves_pkey",
DROP COLUMN "moveId",
ADD COLUMN     "moveId" INTEGER NOT NULL,
ADD CONSTRAINT "Moves_pkey" PRIMARY KEY ("moveId");

-- AlterTable
ALTER TABLE "PokemonMoves" DROP COLUMN "moveId",
ADD COLUMN     "moveId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PokemonMoves" ADD CONSTRAINT "PokemonMoves_moveId_fkey" FOREIGN KEY ("moveId") REFERENCES "Moves"("moveId") ON DELETE RESTRICT ON UPDATE CASCADE;
