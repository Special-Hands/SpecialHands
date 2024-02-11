/*
  Warnings:

  - A unique constraint covering the columns `[path]` on the table `person` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `path` to the `person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "person" ADD COLUMN     "path" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "person_path_key" ON "person"("path");
