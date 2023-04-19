import { MigrationInterface, QueryRunner } from "typeorm";

export class Patchentitys1681913638373 implements MigrationInterface {
    name = 'Patchentitys1681913638373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "text" character varying NOT NULL, "userId" uuid, "announcementId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "annoucements" ADD "fip" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "annoucements" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8" FOREIGN KEY ("announcementId") REFERENCES "annoucements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "annoucements" ADD CONSTRAINT "FK_c609064c91ed6d46ab2c9b8b5e7" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "annoucements" DROP CONSTRAINT "FK_c609064c91ed6d46ab2c9b8b5e7"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "annoucements" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "annoucements" DROP COLUMN "fip"`);
        await queryRunner.query(`DROP TABLE "comments"`);
    }

}
