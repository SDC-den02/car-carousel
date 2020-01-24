import express from 'express';
import cors from 'cors';

const environment = process.env.NODE_ENV || 'development';
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);

const app = express();
app.use(express.json());
app.use(cors());

export default app;