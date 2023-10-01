import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from "typeorm";

const port = process.env.DB_POT as number | undefined

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [`${__dirname} + /../**/entities/*.{ts,js}`], // mapeando todas a entidades do sistema
    migrations: [`${__dirname} + /../**/migrations/*.{ts,js}`] // mapeando todas as migrations do sistema
})