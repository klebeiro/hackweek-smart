import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddColumnIsOrientandoWorkProject1684848907251 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("projects", 
            new TableColumn({
                name: "is_orientando_work",
                type: "int",
                isNullable: true
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("projects", "is_orientando_work")
    }

}
