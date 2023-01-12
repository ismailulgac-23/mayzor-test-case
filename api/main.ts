require("dotenv").config();
import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { ENV } from './src/constants/config';
import * as routes from './src/routes';
async function bootstrap() {

  const app = express();

  app.use(cors());
  app.use(json());

  app.get("/", (req, res) => res.status(200).send("Welcome to, Mayzor Test Case API"));

  app.use("/api", [
    routes.OrderRoutes
  ]);

  app.listen(ENV.PORT, () => console.log(`Server is running on http://localhost:${ENV.PORT}/`))

}

bootstrap();