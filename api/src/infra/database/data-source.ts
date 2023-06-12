import 'reflect-metadata';
import '../../main/config/module-alias'
import {DataSource} from 'typeorm';
import {env} from '@/main/config/env';

export const appDataSource = new DataSource({
    type: "mysql",
    host: env.dbHost,
    port: env.dbPort,
    username: env.dbUser,
    password: env.dbPassword,
    database: env.dbName,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../**/*.migration{.ts,.js}'],
    })

appDataSource.initialize()
.then(() => {
    // here you can start to work with your database
})
.catch((error) => console.log(error))