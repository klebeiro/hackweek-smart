import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUserTypesTable1684514248958 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({name: 'user_types', columns: [
            {
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            },
            {
                name: 'type',
                type: 'varchar'
            }
        ]}))

        await queryRunner.query('INSERT INTO user_types (type) VALUES ("Orientando");')
        await queryRunner.query('INSERT INTO user_types (type) VALUES ("Professor");')
        await queryRunner.query('INSERT INTO user_types (type) VALUES ("Coordenação");')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_types')
    }

}
