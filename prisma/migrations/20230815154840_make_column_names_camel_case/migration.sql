/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `category_name` on the `Category` table. All the data in the column will be lost.
  - The primary key for the `Snack` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `Snack` table. All the data in the column will be lost.
  - You are about to drop the column `flavour_text` on the `Snack` table. All the data in the column will be lost.
  - You are about to drop the column `snack_id` on the `Snack` table. All the data in the column will be lost.
  - You are about to drop the column `snack_name` on the `Snack` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryName` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Snack` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flavourText` to the `Snack` table without a default value. This is not possible if the table is not empty.
  - The required column `snackId` was added to the `Snack` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `snackName` to the `Snack` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Snack" DROP CONSTRAINT "Snack_category_id_fkey";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "category_id",
DROP COLUMN "category_name",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "categoryName" TEXT NOT NULL,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("categoryId");

-- AlterTable
ALTER TABLE "Snack" DROP CONSTRAINT "Snack_pkey",
DROP COLUMN "category_id",
DROP COLUMN "flavour_text",
DROP COLUMN "snack_id",
DROP COLUMN "snack_name",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "flavourText" TEXT NOT NULL,
ADD COLUMN     "snackId" TEXT NOT NULL,
ADD COLUMN     "snackName" TEXT NOT NULL,
ADD CONSTRAINT "Snack_pkey" PRIMARY KEY ("snackId");

-- AddForeignKey
ALTER TABLE "Snack" ADD CONSTRAINT "Snack_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;
