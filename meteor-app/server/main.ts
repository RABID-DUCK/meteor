import { Meteor } from "meteor/meteor";
import "../imports/api/publications";
import "../imports/api/methods";

Meteor.startup(() => {
  console.log("Server started");
});