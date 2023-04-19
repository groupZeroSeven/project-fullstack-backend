import { MigrationInterface, QueryRunner } from "typeorm";

export class Patchcascade1681917830974 implements MigrationInterface {
    name = 'Patchcascade1681917830974'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "annoucements" DROP CONSTRAINT "FK_c609064c91ed6d46ab2c9b8b5e7"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8" FOREIGN KEY ("announcementId") REFERENCES "annoucements"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "annoucements" ADD CONSTRAINT "FK_c609064c91ed6d46ab2c9b8b5e7" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "annoucements" DROP CONSTRAINT "FK_c609064c91ed6d46ab2c9b8b5e7"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "annoucements" ADD CONSTRAINT "FK_c609064c91ed6d46ab2c9b8b5e7" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8" FOREIGN KEY ("announcementId") REFERENCES "annoucements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
