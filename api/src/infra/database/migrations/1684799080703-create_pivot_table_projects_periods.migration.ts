import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreatePivotTableProjectsPeriods1684799080703 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'projects_periods',
            columns: [
                {
                    name: 'id_project',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: 'id_period',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                },
            ]
        }))

        queryRunner.clearSqlMemory();
        const foreginkeyProject =  new TableForeignKey({
            columnNames: ["id_project"],
            referencedColumnNames: ["id"],
            referencedTableName: "projects",
            onDelete: 'NO ACTION',
            onUpdate: 'NO ACTION'
        });
        const foreginkeyPeriod =  new TableForeignKey({
            columnNames: ["id_period"],
            referencedColumnNames: ["id"],
            referencedTableName: "periods",
            onDelete: 'NO ACTION',
            onUpdate: 'NO ACTION'
        });

        await queryRunner.createForeignKeys('projects_periods', [foreginkeyProject, foreginkeyPeriod]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('projects_periods', 'id_period');
        await queryRunner.dropForeignKey('projects_periods', 'id_project');
        await queryRunner.dropTable('projects_periods');
    }

}
