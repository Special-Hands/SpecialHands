/*
  Warnings:

  - You are about to drop the `person` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "person";

-- CreateTable
CREATE TABLE "sponsee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sponsee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sponsee_id_key" ON "sponsee"("id");

-- CreateIndex
CREATE UNIQUE INDEX "sponsee_url_key" ON "sponsee"("url");

-- CreateIndex
CREATE UNIQUE INDEX "sponsee_path_key" ON "sponsee"("path");
