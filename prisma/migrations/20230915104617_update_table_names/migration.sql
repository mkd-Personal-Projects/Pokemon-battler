/*
  Warnings:

  - The primary key for the `Moves` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `desc` on the `Moves` table. All the data in the column will be lost.
  - You are about to drop the column `moveId` on the `Moves` table. All the data in the column will be lost.
  - You are about to drop the column `moveId` on the `PokemonMoves` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `PokemonTypes` table. All the data in the column will be lost.
  - Added the required column `category` to the `Moves` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moveInfo` to the `PokemonMoves` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeInfo` to the `PokemonTypes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PokemonMoves" DROP CONSTRAINT "PokemonMoves_moveId_fkey";

-- DropForeignKey
ALTER TABLE "PokemonTypes" DROP CONSTRAINT "PokemonTypes_type_fkey";

-- AlterTable
ALTER TABLE "Moves" DROP CONSTRAINT "Moves_pkey",
DROP COLUMN "desc",
DROP COLUMN "moveId",
ADD COLUMN     "category" TEXT NOT NULL,
ADD CONSTRAINT "Moves_pkey" PRIMARY KEY ("moveName");

-- AlterTable
ALTER TABLE "PokemonMoves" DROP COLUMN "moveId",
ADD COLUMN     "moveInfo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PokemonTypes" DROP COLUMN "type",
ADD COLUMN     "typeInfo" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "PokemonMoves" ADD CONSTRAINT "PokemonMoves_moveInfo_fkey" FOREIGN KEY ("moveInfo") REFERENCES "Moves"("moveName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokemonTypes" ADD CONSTRAINT "PokemonTypes_typeInfo_fkey" FOREIGN KEY ("typeInfo") REFERENCES "Types"("type") ON DELETE RESTRICT ON UPDATE CASCADE;
