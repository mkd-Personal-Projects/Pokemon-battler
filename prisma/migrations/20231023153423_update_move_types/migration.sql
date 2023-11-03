/*
  Warnings:

  - You are about to drop the column `moveInfo` on the `MoveTypes` table. All the data in the column will be lost.
  - Added the required column `move` to the `MoveTypes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MoveTypes" DROP CONSTRAINT "MoveTypes_moveInfo_fkey";

-- AlterTable
ALTER TABLE "MoveTypes" DROP COLUMN "moveInfo",
ADD COLUMN     "move" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "MoveTypes" ADD CONSTRAINT "MoveTypes_move_fkey" FOREIGN KEY ("move") REFERENCES "Moves"("moveName") ON DELETE RESTRICT ON UPDATE CASCADE;
