import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateProjectTable1684703522510 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'projects',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'title',
                    type: 'varchar'
                },
                {
                    name: 'id_orientador',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'id_orientando',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'id_coorientador',
                    type: 'int',
                    isNullable: true
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
        const createForeignKey = (columnName:string): TableForeignKey => {
            return new TableForeignKey({
                columnNames: [`${columnName}`],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: 'NO ACTION',
                onUpdate: 'NO ACTION'
            });
        }

        await queryRunner.createForeignKeys('projects', [createForeignKey("id_orientador"), createForeignKey("id_orientando"), createForeignKey("id_coorientador")]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('projects');
    }
}
