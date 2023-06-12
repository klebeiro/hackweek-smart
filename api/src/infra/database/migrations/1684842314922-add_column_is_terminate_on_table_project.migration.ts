import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddColumnIsTerminateOnTableProject1684842314922 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("projects", 
            new TableColumn({
                isNullable: true,
                name: "is_terminate",
                type: "int",
                default: 0
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("projects", "is_terminate")

    }

}
