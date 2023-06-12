import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePeriodTable1684763749020 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({name: 'periods', columns: [
            {
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            },
            {
                name: 'period',
                type: 'varchar'
            },
            {
                name: 'starts_at',
                type: 'datetime'
            },
            {
                name: 'ends_at',
                type: 'datetime'
            }
        ]}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('periods')
    }

}
