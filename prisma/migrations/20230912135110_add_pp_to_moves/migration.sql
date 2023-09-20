/*
  Warnings:

  - Added the required column `pp` to the `Moves` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Moves" ADD COLUMN     "pp" INTEGER NOT NULL;
