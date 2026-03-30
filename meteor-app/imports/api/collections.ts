import { Mongo } from "meteor/mongo";

export const CustomersCollection = new Mongo.Collection<any>("customers");