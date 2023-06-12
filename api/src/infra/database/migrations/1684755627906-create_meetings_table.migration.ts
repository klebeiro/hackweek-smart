import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateMeetingsTable1684755627906 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'meetings',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'local',
                    type: 'varchar'
                },
                {
                    name: 'observations',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'reason',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'meeting_details',
                    type: 'varchar'
                },
                {
                    name: 'starts_at',
                    type: 'datetime',
                },
                {
                    name: 'is_confirmed_orientando',
                    type: 'int',
                    isNullable: true
                },
                {
                    name: 'is_confirmed_orientador',
                    type: 'int',
                    isNullable: true
                },
                {
                    name: 'is_confirmed_coorientador',
                    type: 'int',
                    isNullable: true
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

        await queryRunner.createForeignKey('meetings', foreginkey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('meetings');
    }

}
