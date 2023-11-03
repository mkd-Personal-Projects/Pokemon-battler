/*
  Warnings:

  - You are about to drop the `Trainer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Belt" DROP CONSTRAINT "Belt_trainerId_fkey";

-- DropTable
DROP TABLE "Trainer";

-- CreateTable
CREATE TABLE "Trainers" (
    "trainerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Trainers_pkey" PRIMARY KEY ("trainerId")
);

-- AddForeignKey
ALTER TABLE "Belt" ADD CONSTRAINT "Belt_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "Trainers"("trainerId") ON DELETE RESTRICT ON UPDATE CASCADE;
