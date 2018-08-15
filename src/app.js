import express from 'express';
import bodyParser from 'body-parser';
import birdsRouter from './routes/birds';

let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1/', router);

router.use('/bird', birdsRouter);

export default app;
