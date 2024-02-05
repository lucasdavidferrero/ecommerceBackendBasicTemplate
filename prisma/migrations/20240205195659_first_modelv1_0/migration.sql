/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `ProductCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `pricinghistory` MODIFY `endedAt` DATETIME(3) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `ProductCategory_code_key` ON `ProductCategory`(`code`);
