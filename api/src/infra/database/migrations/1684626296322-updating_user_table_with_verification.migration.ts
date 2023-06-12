import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class UpdatingUserTableWithVerification1684626296322 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("users", [
            new TableColumn({
                isNullable: true,
                name: "token",
                type: "varchar",
            }),
            new TableColumn({
                isNullable: true,
                name: "is_verified",
                type: "boolean",
                default: "false",
            })
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await Promise.all([
            await queryRunner.dropColumns("users", ["token", "is_verified"]),
        ]);
    }

}
