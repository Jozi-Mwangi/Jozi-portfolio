/*
  Warnings:

  - Made the column `imageUrl` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL
);
INSERT INTO "new_Project" ("description", "id", "imageUrl", "link", "title") SELECT "description", "id", "imageUrl", "link", "title" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
