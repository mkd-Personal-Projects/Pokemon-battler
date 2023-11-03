/*
  Warnings:

  - You are about to drop the column `typeInfo` on the `PokemonTypes` table. All the data in the column will be lost.
  - Added the required column `type` to the `PokemonTypes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PokemonTypes" DROP CONSTRAINT "PokemonTypes_typeInfo_fkey";

-- AlterTable
ALTER TABLE "PokemonTypes" DROP COLUMN "typeInfo",
ADD COLUMN     "type" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "PokemonTypes" ADD CONSTRAINT "PokemonTypes_type_fkey" FOREIGN KEY ("type") REFERENCES "Types"("type") ON DELETE RESTRICT ON UPDATE CASCADE;
