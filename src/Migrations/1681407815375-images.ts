import { MigrationInterface, QueryRunner } from "typeorm";

export class images1681407815375 implements MigrationInterface {
    name = 'images1681407815375'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url" character varying NOT NULL, "annoucementId" uuid, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_ceb05cf9152304e227d48966dba" FOREIGN KEY ("annoucementId") REFERENCES "annoucements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_ceb05cf9152304e227d48966dba"`);
        await queryRunner.query(`DROP TABLE "images"`);
    }

}
