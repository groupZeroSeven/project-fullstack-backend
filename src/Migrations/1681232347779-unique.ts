import { MigrationInterface, QueryRunner } from "typeorm";

export class unique1681232347779 implements MigrationInterface {
  name = "unique1681232347779";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "annoucements" DROP CONSTRAINT "UQ_25c2ed765c46b6e72c34b656a6d"`
    );
    await queryRunner.query(`ALTER TABLE "annoucements" DROP COLUMN "model"`);
    await queryRunner.query(
      `ALTER TABLE "annoucements" ADD "model" character varying NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "annoucements" DROP COLUMN "model"`);
    await queryRunner.query(
      `ALTER TABLE "annoucements" ADD "model" character varying(50) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "annoucements" ADD CONSTRAINT "UQ_25c2ed765c46b6e72c34b656a6d" UNIQUE ("model")`
    );
  }
}
