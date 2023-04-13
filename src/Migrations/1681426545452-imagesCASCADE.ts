import { MigrationInterface, QueryRunner } from "typeorm";

export class imagesCASCADE1681426545452 implements MigrationInterface {
    name = 'imagesCASCADE1681426545452'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_ceb05cf9152304e227d48966dba"`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_ceb05cf9152304e227d48966dba" FOREIGN KEY ("annoucementId") REFERENCES "annoucements"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_ceb05cf9152304e227d48966dba"`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_ceb05cf9152304e227d48966dba" FOREIGN KEY ("annoucementId") REFERENCES "annoucements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
