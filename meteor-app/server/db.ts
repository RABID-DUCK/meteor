import { DataSource } from "typeorm";
import { Customer } from "./entity/Customer";
import "reflect-metadata";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3310,
    username: "root",
    password: "root",
    database: "testdb",
    synchronize: true,
    logging: false,
    entities: [Customer],
});

AppDataSource.initialize()
    .then(() => console.log("MySQL connected"))
    .catch((err: any) => console.error("MySQL connection error:", err));