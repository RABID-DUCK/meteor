import { Meteor } from "meteor/meteor";
import { Customer } from "/server/entity/Customer";
import { AppDataSource } from "/server/db";

Meteor.publish("customers", async function (this: any) {
    const repo = AppDataSource.getRepository(Customer);
    const data = await repo.find();

    data.forEach((row) => {
        const plain = {
            id: row.id,
            full_name: row.full_name,
            position: row.position
        };
        this.added("customers", row.id.toString(), plain);
    });

    this.ready();
});