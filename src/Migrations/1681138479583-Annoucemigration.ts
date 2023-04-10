import { MigrationInterface, QueryRunner } from "typeorm";

export class Annoucemigration1681138479583 implements MigrationInterface {
  name = "Annoucemigration1681138479583";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(120) NOT NULL, "phone" character varying NOT NULL, "isAdm" boolean NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "annoucements" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(50) NOT NULL, "model" character varying(50) NOT NULL, "year" character varying(120) NOT NULL, "fuel" character varying NOT NULL, "mileage" integer NOT NULL, "color" character varying NOT NULL, "price" numeric(10,2) NOT NULL, "description" character varying NOT NULL, "is_bargain" boolean NOT NULL DEFAULT false, "is_published" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_25c2ed765c46b6e72c34b656a6d" UNIQUE ("model"), CONSTRAINT "PK_1df3f0c9b2c929d6586a0f405b3" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "annoucements"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
