import 'dotenv/config'

export const env = {
    port: parseInt(process.env.API_PORT!),
    main: process.env.MAIN!,
    dbHost: process.env.DB_HOST!,
    dbPort: parseInt(process.env.DB_PORT!),
    dbUser: process.env.DB_USER!,
    dbPassword: process.env.DB_PASSWORD!,
    dbName: process.env.DB_NAME!,
    salt: parseInt(process.env.BCRYPT_SALT!),
    hostRedis: process.env.REDIS_HOST!,
    portRedis: parseInt(process.env.REDIS_PORT!),
}