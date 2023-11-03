/*
  Warnings:

  - You are about to drop the column `trainerName` on the `Trainer` table. All the data in the column will be lost.
  - Added the required column `name` to the `Trainer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trainer" DROP COLUMN "trainerName",
ADD COLUMN     "name" TEXT NOT NULL;
