import express, {
  json,
  NextFunction,
  Request as ExpressRequest,
  Response as ExpressResponse,
  urlencoded
} from "express";
import swaggerUI from 'swagger-ui-express';
import { ValidateError } from "tsoa";

import { RegisterRoutes } from "../build/tsoa/routes";
import swagger from '../build/tsoa/swagger.json';

export const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

RegisterRoutes(app);

app.get('/swagger.json', (_, res) => res.json(swagger));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swagger));

app.use((
  err: unknown,
  req: ExpressRequest,
  res: ExpressResponse,
  next: NextFunction
): ExpressResponse | void => {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${ req.path }:`, err.fields);
    return res.status(422).end();
  }
  if (err instanceof Error) {
    console.warn(`Uncaught Error for ${ req.path }:`, err);
    return res.status(500).end();
  }

  next();
});
