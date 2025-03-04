/*
  Warnings:

  - You are about to drop the column `user_id` on the `transactions` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "transactions_user_id_key";

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "user_id";
