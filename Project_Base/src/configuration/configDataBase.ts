/**
 * @author Alejandro Pascual <alextkd@gmail.com> 01/08/2020
 */
import { init, MongoClient } from "./../../dependences.ts";
//Configuration environments
import configEnvironments, * as configuration from "./../configuration/configEnvironments.ts";

//await init();
const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");
const db = client.database(configuration.default.app.name);
export default db;