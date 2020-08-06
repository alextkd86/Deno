/**
 * @author Alejandro Pascual <alextkd@gmail.com> 01/08/2020
 */
import { config, path, DotenvConfig, log } from "./../../dependences.ts";

/************************************************************************************************************************************************
************    In this file is the configuration of what type of environment we are working on Development, Test or Production      ************
*************************************************************************************************************************************************/
const __filename = new URL("", import.meta.url).pathname;
// Will contain trailing slash
const __dirname = new URL(".", import.meta.url).pathname,
      rootPath = path.normalize(__dirname + "/..");

//We load te variables that are defined in the .env file
//Activar para DEV Environment
export const env = config({ path: "dev.env" });
//Active PRE Environment
//const env = config({ path: 'test.env' });
//Active PROD Environment
//const env = config();

/**
 * We declare 3 types of configuration: DEV, TEST AND PROD
 * @summary configuration of several profiles in order to start de application
 * @param {Object} DEV - Start the server on development mode
 * @param {Object} TEST - Start the server on test mode
 * @param {Object} PROD - Start the server on production mode
 */
const objDEV: any = {
  root: rootPath,
  app: {
    name: "exampleDevelopment",
  },
  port: 3001,
  db: "mongodb://127.0.0.1:27017/exampleDevelopment",
};
const objTEST: any = {
  root: rootPath,
  app: {
    name: "exampleTest",
  },
  port: 3002,
  db: "mongodb://127.0.0.1:27017/exampleTest",
};
const objPROD: any = {
  root: rootPath,
  app: {
    name: "example",
  },
  port: 3003,
  db: "mongodb://127.0.0.1:27017/exampleProduction",
};
const environmentConfig: Map<String, any> = new Map();
environmentConfig.set("DEV", objDEV);
environmentConfig.set("TEST", objTEST);
environmentConfig.set("PROD", objPROD);
log.info(env.ENVIRONMENT_RUNNING);
export default environmentConfig.get(env.ENVIRONMENT);
