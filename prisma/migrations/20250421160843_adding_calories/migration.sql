/*
  Warnings:

  - You are about to alter the column `calories` on the `Recipe` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Int`.
  - You are about to alter the column `carbs` on the `Recipe` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Int`.
  - You are about to alter the column `fats` on the `Recipe` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Int`.
  - You are about to alter the column `proteins` on the `Recipe` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "steps" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "rating" INTEGER,
    "prepTime" INTEGER,
    "cookTime" INTEGER,
    "portions" INTEGER,
    "tools" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "calories" INTEGER,
    "proteins" INTEGER,
    "carbs" INTEGER,
    "fats" INTEGER
);
INSERT INTO "new_Recipe" ("calories", "carbs", "cookTime", "createdAt", "fats", "id", "image", "ingredients", "name", "portions", "prepTime", "proteins", "rating", "steps", "tags", "tools") SELECT "calories", "carbs", "cookTime", "createdAt", "fats", "id", "image", "ingredients", "name", "portions", "prepTime", "proteins", "rating", "steps", "tags", "tools" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
