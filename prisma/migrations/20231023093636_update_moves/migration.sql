/*
  Warnings:

  - You are about to drop the column `type` on the `Moves` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Pokemon` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Moves" DROP COLUMN "type";

-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "type";

-- CreateTable
CREATE TABLE "MoveTypes" (
    "moveTypeId" TEXT NOT NULL,
    "moveInfo" TEXT NOT NULL,
    "typeInfo" TEXT NOT NULL,

    CONSTRAINT "MoveTypes_pkey" PRIMARY KEY ("moveTypeId")
);

-- AddForeignKey
ALTER TABLE "MoveTypes" ADD CONSTRAINT "MoveTypes_moveInfo_fkey" FOREIGN KEY ("moveInfo") REFERENCES "Moves"("moveName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoveTypes" ADD CONSTRAINT "MoveTypes_typeInfo_fkey" FOREIGN KEY ("typeInfo") REFERENCES "Types"("type") ON DELETE RESTRICT ON UPDATE CASCADE;
