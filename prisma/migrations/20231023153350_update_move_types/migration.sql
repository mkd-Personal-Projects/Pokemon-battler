/*
  Warnings:

  - You are about to drop the column `typeInfo` on the `MoveTypes` table. All the data in the column will be lost.
  - Added the required column `type` to the `MoveTypes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MoveTypes" DROP CONSTRAINT "MoveTypes_typeInfo_fkey";

-- AlterTable
ALTER TABLE "MoveTypes" DROP COLUMN "typeInfo",
ADD COLUMN     "type" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "MoveTypes" ADD CONSTRAINT "MoveTypes_type_fkey" FOREIGN KEY ("type") REFERENCES "Types"("type") ON DELETE RESTRICT ON UPDATE CASCADE;
