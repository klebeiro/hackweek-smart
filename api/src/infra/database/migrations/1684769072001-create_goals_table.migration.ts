import { MigrationInterface, QueryRunner, TableForeignKey, Table } from "typeorm"

export class CreateGoalsTable1684769072001 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'goals',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'id_project',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'starts_at',
                    type: 'datetime',
                },{
                    name: 'ends_at',
                    type: 'datetime',
                },{
                    name: 'finished_at',
                    type: 'datetime',
                    isNullable: true
                },
                {
                    name: 'expected_at',
                    type: 'datetime',
                    isNullable: true
                },
                {
                    name: 'id_meeting_expected',
                    type: 'int',
                    isNullable: true,
                },
                {
                    name: 'id_period',
                    type: 'int',
                    isNullable: true,
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
        const createForeignKey = (columnName:string, rcolumnName:string, rtable:string): TableForeignKey => {
            return new TableForeignKey({
                columnNames: [`${columnName}`],
                referencedColumnNames: [`${rcolumnName}`],
                referencedTableName: `${rtable}`,
                onDelete: 'NO ACTION',
                onUpdate: 'NO ACTION'
            });
        }

        await queryRunner.createForeignKeys('goals', [createForeignKey("id_project", "id", "projects"), createForeignKey("id_meeting_expected", "id", "meetings"), createForeignKey("id_period", "id", "periods")]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('goals');
    }

}
