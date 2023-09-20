/*
  Warnings:

  - You are about to drop the column `defence` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `splDefence` on the `Pokemon` table. All the data in the column will be lost.
  - Added the required column `defense` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `splDefense` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "defence",
DROP COLUMN "splDefence",
ADD COLUMN     "defense" INTEGER NOT NULL,
ADD COLUMN     "splDefense" INTEGER NOT NULL;
