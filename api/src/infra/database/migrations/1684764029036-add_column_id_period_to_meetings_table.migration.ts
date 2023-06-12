import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm"

export class AddColumnIdPeriodToMeetingsTable1684764029036 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("meetings", 
            new TableColumn({
                name: "id_period",
                type: "int",
            }),
        )
        queryRunner.clearSqlMemory();
        const foreginkey =  new TableForeignKey({
            columnNames: ["id_period"],
            referencedColumnNames: ["id"],
            referencedTableName: "periods",
            onDelete: 'NO ACTION',
            onUpdate: 'NO ACTION'
        });

        await queryRunner.createForeignKey('meetings', foreginkey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await Promise.all([
            await queryRunner.dropForeignKey("meetings", "id_period"),
            await queryRunner.dropColumn("meetings", "id_period"),
        ]);
    }

}
