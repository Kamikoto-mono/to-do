import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import Task from "./entity/task";

export const configConnectionPostgres:TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'todo',
    entities: [Task],
    synchronize: true,
} 