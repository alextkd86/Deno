/**
 * @author Alejandro Pascual <alextkd@gmail.com> 01/08/2020
 */
export { Application, Router } from "https://deno.land/x/oak/mod.ts";
//CORS
export { oakCors } from "https://deno.land/x/cors/mod.ts";
//Config and Dotenv
export { config, DotenvConfig } from "https://deno.land/x/dotenv/mod.ts";
//Path
export * as path from "https://deno.land/std/path/mod.ts";
//Logger
export * as log from "https://deno.land/std/log/mod.ts";
//MongoDB
export { init, MongoClient, ObjectId, Collection } from "https://deno.land/x/mongo@v0.9.1/mod.ts";
//Tokens JWT modules
export { validateJwt, parseAndDecode, validateJwtObject } from "https://deno.land/x/djwt/validate.ts";
export { makeJwt, setExpiration, Jose, Payload } from "https://deno.land/x/djwt/create.ts";



/**TEST */
export * as asserts from "https://deno.land/std/testing/asserts.ts";
export * as spy from "https://raw.githubusercontent.com/udibo/mock/v0.3.0/spy.ts";
