import {MigrationInterface, QueryRunner} from "typeorm";

export class initialEntities1657751407568 implements MigrationInterface {
    name = 'initialEntities1657751407568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "upgradeIssue"."user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, "inviteCode" character varying NOT NULL, CONSTRAINT "inviteCode" UNIQUE ("inviteCode"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "upgradeIssue"."photo" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "filename" character varying NOT NULL, "views" integer NOT NULL, "isPublished" boolean NOT NULL, "userId" integer, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "upgradeIssue"."photo" ADD CONSTRAINT "FK_4494006ff358f754d07df5ccc87" FOREIGN KEY ("userId") REFERENCES "upgradeIssue"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "upgradeIssue"."photo" DROP CONSTRAINT "FK_4494006ff358f754d07df5ccc87"`);
        await queryRunner.query(`DROP TABLE "upgradeIssue"."photo"`);
        await queryRunner.query(`DROP TABLE "upgradeIssue"."user"`);
    }

}
