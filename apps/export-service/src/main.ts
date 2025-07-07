import express from 'express';
import router from './routes/pdfRoute';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

/**
 * adding express middlware
 */
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(express.json());

/**
 * Adding routes for different module
 */
app.use('/api/v1/pdf', router);

/**
 * Starts the ExpressJS server on default port 3000
 */
const server = app.listen(3000, () =>
  console.log(`Starting ExpressJS server on Port 3000`)
);

export default server;
