import { MigrationInterface, QueryRunner } from "typeorm";

export class banner1681232088826 implements MigrationInterface {
    name = 'banner1681232088826'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "annoucements" ADD "banner" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "annoucements" DROP COLUMN "banner"`);
    }

}
