import { Meteor } from "meteor/meteor";
import mysql from "mysql2/promise";

let connection: mysql.Connection;

Meteor.startup(async () => {
    connection = await mysql.createConnection({
        host: "localhost",
        port: 3310,
        user: "root",
        password: "root",
        database: "meteor_test",
    });
});

Meteor.methods({
    async getCustomers(): Promise<
        { id: number; full_name: string; position: string }[]
    > {
        const [rows]: any = await connection.execute(`
            SELECT c.id, c.full_name, p.name AS position
            FROM customers c
                LEFT JOIN positions p ON c.position_id = p.id
        `);
        return rows;
    },

    async translate(text: string): Promise<string> {
        const [rows]: any = await connection.execute(
            "SELECT translated FROM translations WHERE source = ?",
            [text]
        );
        console.log("DB result for translate:", rows);
        return rows[0]?.translated || text;
    },
});