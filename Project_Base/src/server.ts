/**
 * @author Alejandro Pascual <alextkd@gmail.com> 01/08/2020
 */
import { Application, oakCors } from "./../dependences.ts";
import "https://deno.land/x/dotenv/load.ts";

//Routes
import router from "./routes/exampleRoutes.ts";
import router2 from "./routes/exampleRoutes2.ts";

// logger execution in order to inject to app.use()
import loggerExecution from './middlewares/loggerExecution.ts';
//Configuration environments
import configEnvironments, * as configuration from "./configuration/configEnvironments.ts";
import { green, yellow, cyan } from "https://deno.land/std@0.53.0/fmt/colors.ts";
import notFound from "./middlewares/notFound.ts";

const app = new Application();

// Enable CORS for All Routes
//app.use(oakCors());

// Enable CORS only for my safe domains
app.use(
  oakCors({
    origin: [
      configuration.env.CORS_LOCALHOST_HTTP + ":" +
      configuration.env.CORS_PORT_LOCALHOST_HTTP,
      configuration.env.CORS_LOCALHOST_HTTPS + ":" +
      configuration.env.CORS_PORT_LOCALHOST_HTTPS,
      configuration.env.CORS_LOCALHOST_NULL,
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  }),
);

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${hostname ?? "localhost"}:${port}`;
  console.log(
    `${yellow("Listening on:")} ${green(url)}`,
  );
});

// Logger show us the URL and the time to execution by console 
// order of execution is important;
app.use(loggerExecution.logger);
app.use(loggerExecution.responseTime);

//Inject diferents application routes
app.use(router.routes());
app.use(router2.routes());
//It allows us any operation GET, PUT, POST, DELETE...
app.use(router.allowedMethods());

// 404 page
app.use(notFound);

await app.listen({ port: configuration.default.port });
