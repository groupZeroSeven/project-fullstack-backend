import { MigrationInterface, QueryRunner } from "typeorm";

export class default1681392681078 implements MigrationInterface {
  name = "default1681392681078";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "annoucements" ALTER COLUMN "is_published" SET DEFAULT true`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "annoucements" ALTER COLUMN "is_published" SET DEFAULT false`
    );
  }
}
