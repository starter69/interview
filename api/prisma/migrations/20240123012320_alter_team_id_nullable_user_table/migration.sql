-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_team_id_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "team_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;
