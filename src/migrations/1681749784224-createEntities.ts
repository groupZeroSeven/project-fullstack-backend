import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEntities1681749784224 implements MigrationInterface {
    name = 'CreateEntities1681749784224'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "annoucements" DROP CONSTRAINT "FK_42c63dd7a7bbae75deb69096547"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_eceec63aabe184730569db684e7"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_91c91490c2d2736629976527868"`);
        await queryRunner.query(`ALTER TABLE "annoucements" RENAME COLUMN "userIdId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "userIdId"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "announcementsIdId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "announcementId" uuid`);
        await queryRunner.query(`ALTER TABLE "annoucements" ADD CONSTRAINT "FK_c609064c91ed6d46ab2c9b8b5e7" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8" FOREIGN KEY ("announcementId") REFERENCES "annoucements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "annoucements" DROP CONSTRAINT "FK_c609064c91ed6d46ab2c9b8b5e7"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "announcementId"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "announcementsIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "userIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "annoucements" RENAME COLUMN "userId" TO "userIdId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_91c91490c2d2736629976527868" FOREIGN KEY ("announcementsIdId") REFERENCES "annoucements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_eceec63aabe184730569db684e7" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "annoucements" ADD CONSTRAINT "FK_42c63dd7a7bbae75deb69096547" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
