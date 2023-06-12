import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateAvaliationTable1684781619132 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'avaliations',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'avaliation',
                    type: 'varchar'
                },
                {
                    name: 'grade',
                    type: 'int',
                },
                {
                    name: 'id_project',
                    type: 'int',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))

        queryRunner.clearSqlMemory();
        const foreginkey =  new TableForeignKey({
            columnNames: ["id_project"],
            referencedColumnNames: ["id"],
            referencedTableName: "projects",
            onDelete: 'NO ACTION',
            onUpdate: 'NO ACTION'
        });

        await queryRunner.createForeignKey('avaliations', foreginkey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('avaliations');
    }

}
